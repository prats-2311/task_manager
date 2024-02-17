const getAllTasks = (req, res) => {
  res.send("all items from the file");
};
const createTask = (req, res) => {
  res.json(req.body);
  //   res.send("create task");
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
  //   res.send("get single task");
};
const updateTask = (req, res) => {
  res.send("update a single task");
};
const deleteTask = (req, res) => {
  res.send("delete a task");
};
module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  deleteTask,
  createTask,
};
