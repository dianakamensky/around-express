const { router, readJson } = require('./utils');

router.get('/users', (req, res) => {
  readJson('users.json')
    .then((users) => {
      res.send(users);
    })
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
});

router.get('/users/:id', (req, res) => {
  readJson('users.json')
    .then((users) => {
      const user = users.find((u) => u._id === req.params.id);
      if (!user) {
        res.status(404).send({ message: 'User ID not found' });
      } else {
        res.send({ data: user });
      }
    })
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
});
