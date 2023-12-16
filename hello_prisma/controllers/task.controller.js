const db = require("../db");

exports.taskList = async (req, res) => {
  const tasks = await db.task.findMany({
    where: {
      userId: req.user.username,
    },
  });
  res.json(tasks.map((task) => ({ ...task, id: String(task.id) })));
};
