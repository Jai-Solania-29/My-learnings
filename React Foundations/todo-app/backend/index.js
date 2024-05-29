const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();
const cors = require("cors")

app.use(express.json());
app.use(cors({}))

app.post("/todo", async function(req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success) {
        req.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
    })
    res.json({
        msg: "Todo Created"
    })
})

app.get("/todos", async function(req, res) {
     const todos = await todo.find({});

     res.json({
        todos
     })
})

app.put("/completed", async function(req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success) {
        req.statusCode(411).json({
            msg: "You sent the wrong inputs"
        })
    }
    await todo.update({
        _id: req.body.id
    }, {
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000);