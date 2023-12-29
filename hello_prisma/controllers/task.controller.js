const db = require("../db");
const { TaskService } = require("../services");

const taskService = new TaskService();

exports.taskList = async (req, res, next) => {
  try {
    const tasks = await taskService.getTaskWithFilter(req.user, req.query, {
      title: true,
      description: true,
      id: true,
    });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    await db.task.delete({
      where: {
        id: taskId,
        userId: req.user.username,
      },
    });
    return res.status(204).json({ status: "OK" });
  } catch (error) {
    next(error);
  }
};
exports.updateTask = async (req, res, next) => {
  try {
    const { taskId } = req.params;
    const { title } = req.body;
    const updatedTask = await db.task.update({
      where: { id: taskId, userId: req.user.username },
      data: {
        title,
      },
    });
    return res.json({ ...updatedTask, id: String(updatedTask.id) });
  } catch (error) {
    next(error);
  }
};
