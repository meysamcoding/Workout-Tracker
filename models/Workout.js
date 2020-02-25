const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
           
            type: {
                type: String,
                unique: true,
                required: true,
                default: ""
            },

            name: {
                type: String,
                required: true,
                default: ""
            },
            duration: {
                type: Number,
                required: true,

            },

            weight: {
                type: Number,
                required: true
            },

            reps: {
                type: Number,
                required: true
            },

            sets: {
                type: Number,
                required: true
            },

            distance: {
                type: Number,
                required: true
            },




            longstring: {
                type: String,
                validate: [({ length }) => length >= 6, "Longstring should be longer."]
            }


        }
    ]

});

const Workout = mongoose.model("Example", ExerciseSchema);

module.exports = Workout;