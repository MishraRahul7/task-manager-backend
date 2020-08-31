const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  taskTitle: { type: String, required: true, trim: true },
  taskDescription: { type: String, required: true, trim: true }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
