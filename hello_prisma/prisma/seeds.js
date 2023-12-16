const prisma = require("../db");

const users = [
  {
    username: "gholam",
    password: "1234",
    age: 32,
  },
  {
    username: "kokab",
    password: "1234",
    age: 18,
  },
];

const tasks = [
  {
    title: "panir bekhar",
    user: users[0].username,
  },
  {
    title: "pofak bekhar",
    user: users[1].username,
  },
];

const tags = [
  {
    name: "home",
    user: users[0].username,
  },
  {
    name: "cinema",
    user: users[1].username,
  },
];

async function main() {
  await prisma.user.deleteMany({});
  await prisma.tag.deleteMany({});
  await prisma.task.deleteMany({});
  await prisma.tagTask.deleteMany({});
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }
  const generatedTask = [];
  for (const task of tasks) {
    const taskObj = await prisma.task.create({
      data: {
        title: task.title,
        user: {
          connect: { username: task.user },
        },
      },
    });
    generatedTask.push(taskObj);
  }
  const generatedTag = [];
  for (const tag of tags) {
    const tagObj = await prisma.tag.create({
      data: {
        name: tag.name,
        user: {
          connect: { username: tag.user },
        },
      },
    });
    generatedTag.push(tagObj);
  }
  for (let i = 0; i < generatedTask.length; i++) {
    await createTagTask(generatedTask[i].id, generatedTag[i].id);
  }
}

async function createTagTask(taskId, tagId) {
  return await prisma.tagTask.create({
    data: {
      tag: {
        connect: { id: tagId },
      },
      task: {
        connect: { id: taskId },
      },
    },
  });
}

main();
