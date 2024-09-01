const { Router } = require('express');
const { getTodos, addTodo, updateTodo, deleteTodo, markAsCompleted } = require('../controllers/todos');

const router = Router();

// Obtener todas las tareas
router.get('/getTodos', getTodos);

// Agregar una nueva tarea
router.post('/addTodo', addTodo);

// Actualizar una tarea existente
router.patch('/addTodo/:id', updateTodo);

// Eliminar una tarea
router.delete('/addTodo/:id', deleteTodo);

// Marcar una tarea como completada
router.patch('/addTodo/complete/:id', markAsCompleted);

module.exports = router;
