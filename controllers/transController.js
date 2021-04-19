const db = require ("../models")

module.exports = {
    findAll: function (req, res) {
      db.Transaction.find(req.query)
        .sort({ date: -1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
      db.Transaction.create(req.body)
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    insert: function (req, res) {
      db.Transaction.insertMany(req.body)
        .then((dbTransaction) => res.json(dbTransaction))
        .catch((err) => res.status(404).json(err));
    },
    remove: function (req, res) {
      db.Transaction.findById({ _id: req.params.id })
        .then((dbModel) => dbModel.remove())
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
  };