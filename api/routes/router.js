const router = require('express').Router();
const Chars = require('../models/charModels.js');

router.get('/', (req, res) => {
  Chars.getAll()
    .then(chars => {
      res.status(200).json(chars);
    })
    .catch(err => {
      res.status(500).json({ err: `An error occurred.` });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  
  Chars.findById(id)
    .then(char => {
      if(recipe) {
        Chars.remove(id)
          .then(deleteChar => {
            res.status(200).json({ remove: deleteChar });
          })
          .catch(err => {
            res.status(500).json({ err: `An error prevented character removal.` });
          });
      } else {
        res.status(404).json({ message: `Count not find requested character.` });
      };
    })
    .catch(err => {
      res.status(500).json({ err: `An error prevented character's retrieval.` });
    });
});

module.exports = router;