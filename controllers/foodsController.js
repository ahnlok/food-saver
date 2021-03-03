const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.Food.find(req.query)
        .sort( {date: -1 })
        .then((dbModel) => res.json(dbModel))
        .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Food.findById(req.params.id)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
/*         db.User.findByIdAndUpdate(
            req.params.id,
            { $push: { foodItems: req.body } },
            // "runValidators" will ensure new exercises meet our schema requirements
            { new: true, runValidators: true }
          )
            .then((dbModel) => {
              res.json(dbModel);
            })
            .catch((err) => {
              res.json(err);
            });     */
    
        db.Food.create(req.body)
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Food.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
        })
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Restaurant.findById({ _id: req.params.id })
            .then((dbModel) => dbModel.remove())
            .then((dbModel) => res.json(dbModel))
            .catch((err) => res.status(422).json(err));
    }
};