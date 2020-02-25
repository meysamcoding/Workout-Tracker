const express = require("express");
const logger = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const Workout = require("./models/Workout.js");
const apiRoute = require("./router/apiRoute");
const htmlRoute = require("./router/htmlRoutes");
const app = express();

const PORT = process.env.PORT || 3000;

// const db = require("./models");



app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/populate", { useNewUrlParser: true });
  app.use(apiRoute);
  app.use(htmlRoute);

//     app.get("/exercise", (req, res) => {
//         res.sendFile(path.join(__dirname, "./public/exercise.html"));
//     });
    
    



// app.get("/stats", (req, res) => {
//     res.sendFile(path.join(__dirname, "./public/stats.html"));
// });


// app.post("/api/workouts", ({ body }, res) => {
//     db.Workout.create(body)
//         .then(dbWorkout => {
//             res.json(dbWorkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });
// app.put("/api/workouts/:id", (req, res) => {

//     db.Workout.find(body)
//         .then(({ _id }) => db.Workout.findByIdAndUpdate({}, { $push: { exercises: body } }, { new: true }))
//         .then(dbworkout => {
//             res.json(dbworkout);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// })


// app.get("/api/workouts/range", (req, res) => {
//     db.Exercise.find({})
//         .sort({ date: -1 })
//         .then(dbExercise => {
//             res.json(dbExercise);
//         })
//         .catch(err => {
//             res.json(err);
//         });
// });

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});