const router = require('express').Router();
const Chars = require('../models/char-models.js');

router.get('/', (req, res) => {
  Chars.getAll()
    .then(chars => {
      res.status(200).json(rows);
    })
    .catch(err => {
      res.status(500).json({ err: `An error occurred.` });
    });
});

module.exports = router;