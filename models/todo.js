const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true},
    description: {type: String, required: true},
    completed: {type: Boolean, required: true}
},{
    timestamps: true
})

const todo = mongoose.model('Todo', todoSchema)

module.exports = Todo