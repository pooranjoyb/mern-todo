import mongoose from 'mongoose'

const TodoSchema = new mongoose.Schema({
    data: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: Date
})

const Todo = mongoose.model('todos', TodoSchema);

export default Todo;