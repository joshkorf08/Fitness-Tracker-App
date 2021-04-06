const mogoose = require("mongoose");

const schema = mongoose.schema;

const exerciseSchema = new schema({
    
    name: { type: String, required: true },
    
    sets: { type: Number },
    
    reps: { type: Number },
    
    weight: { type: Number },
    
    minutes: { type: Number },
});
const Exercises = mongoose.model("Exercises", exerciseSchema);
module.exports = Exercises;