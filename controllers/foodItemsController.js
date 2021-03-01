const User = require("../models/user");


module.exports = {
  findAll: function(req, res) {
    User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
/*     db.User
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));*/
      User.findByIdAndUpdate(
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
        });    
   },
  remove: function(req, res) {
    User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};

/* Workout.findByIdAndUpdate(
  params.id,
  { $push: { exercises: body } },
  // "runValidators" will ensure new exercises meet our schema requirements
  { new: true, runValidators: true }
)
  .then((dbWorkout) => {
    res.json(dbWorkout);
  })
  .catch((err) => {
    res.json(err);
  }); */