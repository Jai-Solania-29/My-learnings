const mongoose = require("mongoose");
const { string, boolean } = require("zod");

mongoose.connect("mongodb+srv://jaideep2912:brVkOEkPB664DkLr@cluster1.kdm9pbv.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: string,
    description: string,
    completed: boolean
})

const todo = mongoose.model('todos', todoSchema);
module.exports = {
    todo
}