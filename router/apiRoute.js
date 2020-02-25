const router = require("express").Router();


const db = require("../models/Workout");


router.post("/api/workouts", (req, res) => {
    // console.log("req", req.params);
    db.Workout.create(req.body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

router.put("/api/workouts/:id", (req, res) => {
    // console.log("req", req.body);
    console.log("----------------------------------------req", req.id)
    const array = {};

    db.Workout.find(req.body._id)
        .then(({ _id }) => db.Workout.findByIdAndUpdate(id, { _id }, { $push: { exercises: body } }, { new: true }))
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
})
router.get("/api/workouts/:id", (req, res) => {
    // console.log("req", req);
    // console.log("res", res)

    db.Workout.find(body)
        .then(({ _id }) => db.Workout.findByIdAndUpdate({ _id }, { $push: { exercises: body } }, { new: true }))
        .then(dbworkout => {
            res.json(dbworkout);
        })
        .catch(err => {
            res.json(err);
        });
})


router.get("/api/workouts/range", (req, res) => {
    db.Exercise.find({})
        .sort({ date: -1 })
        .then(dbExercise => {
            res.json(dbExercise);
        })
        .catch(err => {
            res.json(err);
        });
});

module.exports = router;