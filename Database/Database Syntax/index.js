const mongoose = require("mongoose");

//SCHEMA IN DB

const UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

// CREATE SYNTAX

User.create({
    username: req.body.username,
    password: req.body.password
});

// READ SYNTAX

User.findById("1");
User.findOne({
    username: "jaideep2912@gmail.com"
})
User.updateOne(
    { "id": "1" },
    { $push: {purchasedCourses: courseId }}
)

//UPDATE SYNTAX

User.updateOne({
    id: "1"
}, {
    password: "newPassword"
})

User.updateMany({}, {
    premium: true
})

//DELETE SYNTAX

User.deleteMany({})

User.deleteOne({
    username: "jaideep2912@gmail.com"
})