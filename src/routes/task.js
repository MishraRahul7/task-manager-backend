const express = require('express');
const router = new express.Router();
const Task = require('../model/task');

router.post('/task/add', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send({ task });
  } catch (error) {
    res.status(400).send();
    console.log(error);
  }
});

router.get('/task/all', (req, res) => {
  res.send(req.task);
});
router.patch('/task/update', async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['taskTitle', 'taskDescription'];
  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    res.status(400).send({ error: 'Invalid Updates' });
  } else {
    try {
      updates.forEach(update => (req.task[update] = req.body[update]));
      await req.task.save();
      res.send(req.task);
    } catch (e) {
      res.status(400).send();
    }
  }
});

router.delete('/task/delete', async (req, res) => {
  try {
    await req.task.remove();
    res.send(req.task);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
