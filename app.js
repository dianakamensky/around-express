const express = require('express');
const { router } = require('./routes/utils');

const { PORT = 3000 } = process.env;
const app = express();
app.listen(PORT, () => {});
app.use('/', router);
require('./routes/cards');
require('./routes/users');

router.get('*', (req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});
