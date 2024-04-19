const express = require('express');
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddlewares');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post(
  '/tasks',
  taskMiddleware.validateTitleBody,
  tasksController.createTask
);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
  '/tasks/:id',
  taskMiddleware.validateStatusTitleBody,
  tasksController.updateTask
);
module.exports = router;
