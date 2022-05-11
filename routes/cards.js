const { router, readJson } = require('./utils');

router.get('/cards', (req, res) => {
  readJson('cards.json')
    .then((cards) => {
      res.send(cards);
    })
    .catch(() => res.status(500).send({ message: 'An error has occurred on the server' }));
});
