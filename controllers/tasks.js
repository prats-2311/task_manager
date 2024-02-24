const Task = require("../models/Task");
const asyncWrapper = require("../middleware/async");
const CustomError = require("../errors/custom-error");
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});
const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});
const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    next(new CustomError("Not found", 404));
    // return res.status(404).json({ msg: `No task with id ${taskId}` });
  } else {
    res.status(200).json({ task });
  }
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    next(new CustomError("Not found", 404));
  } else {
    res.status(200).json({ name: task });
  }
});
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const data = req.body;
  const task = await Task.findOneAndUpdate(
    { _id: taskId },
    { ...data },
    { runValidators: true, new: true }
  );
  if (!task) {
    next(new CustomError("Not found", 404));

    // res.status(404).json({ msg: `Cannot find task with id: ${taskId}` });
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
