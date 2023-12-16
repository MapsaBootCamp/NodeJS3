const db = require("../db");

exports.taskList = async (req, res) => {
  const tasks = await db.task.findMany({
    where: {
      user: req.user,
    },
  });
  res.json(tasks.map((task) => ({ ...task, id: String(task.id) })));
};

exports.createTask = async (req, res) => {
  const { title } = req.body;
  const task = await db.task.create({
    data: {
      title,
      userId: req.user.username,
    },
    select: {
      id: true,
      title: true,
      status: true,
    },
  });
  res.status(201).json({ ...task, id: String(task.id) });
};

exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;
  await db.task.delete({
    where: {
      id: taskId,
      userId: req.user.username,
    },
  });
  return res.status(204).json({ status: "OK" });
};
exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  const { title } = req.body;
  const updatedTask = await db.task.update({
    where: { id: taskId, userId: req.user.username },
    data: {
      title,
    },
  });
  return res.json({ ...updatedTask, id: String(updatedTask.id) });
};
