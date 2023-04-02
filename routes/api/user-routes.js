const router = require('express').Router();
const { User } = require('../../models');

// The `/api/users` endpoint

router.get('/', (req, res) => {
  User.findAll({
    attributes: ['id', 'username'] // Only include id and username in the result
  })
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
});

router.get('/:id', (req, res) => {
  User.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'username'] // Only include id and username in the result
  })
    .then((user) => res.json(user))
    .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});

router.delete('/:id', (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((user) => res.status(200).json(user))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
