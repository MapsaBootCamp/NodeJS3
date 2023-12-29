const db = require("../db");
const { idSerializer } = require("../utils");

class TaskService {
  // TODO: Know that Dependency Inversion missed! (SOLID)
  db = db;
  constructor() {}

  async getTaskWithFilter(user, queryFilter, selectedColumns) {
    const { task_title, status, all, tag } = queryFilter;

    const filterObject = {
      user,
    };

    task_title && (filterObject.title = { contain: task_title });
    Number(all)
      ? null
      : status
      ? (filterObject.status = { in: JSON.parse(status) })
      : null;

    const tagObj = await db.tag.findFirst({
      where: {
        name: tag,
        user,
      },
    });

    const tasks = await db.task.findMany({
      where: {
        ...filterObject,
        TagTask: {
          every: {
            tagId: { equals: tagObj.id },
          },
        },
      },
      select: {
        ...selectedColumns,
        TagTask: {
          select: {
            tag: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });

    return selectedColumns?.id
      ? tasks.map((task) => ({ ...task, id: idSerializer(task.id) }))
      : tasks;
  }
}

module.exports = TaskService;
