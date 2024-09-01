const { response } = require('express');

const { dbConfig } = require('../database/config.db');
const mysql = require('mysql2/promise');

// Obtener todas las tareas
const getTodos = async (req, res = response) => {
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [results] = await connection.execute('SELECT * FROM todos');
        await connection.end();
        res.json(results);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Agregar una nueva tarea
const addTodo = async (req, res = response) => {
    const { title, description, dueDate, priority, completed } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        const [result] = await connection.execute(
            'INSERT INTO todos (title, description, due_date, priority, completed) VALUES (?, ?, ?, ?, ?)',
            [title, description, dueDate, priority, completed]
        );
        await connection.end();
        res.status(201).json({ id: result.insertId, title, description, dueDate, priority, completed });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una tarea existente
const updateTodo = async (req, res = response) => {
    const { id } = req.params;
    const { title, description, dueDate, priority, completed } = req.body;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(
            'UPDATE todos SET title = ?, description = ?, due_date = ?, priority = ?, completed = ?, updated_at = NOW() WHERE id = ?',
            [title, description, dueDate, priority, completed, id]
        );
        await connection.end();
        res.json({ message: 'Tarea actualizada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una tarea
const deleteTodo = async (req, res = response) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute('DELETE FROM todos WHERE id = ?', [id]);
        await connection.end();
        res.json({ message: 'Tarea eliminada correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Marcar una tarea como completada
const markAsCompleted = async (req, res = response) => {
    const { id } = req.params;
    try {
        const connection = await mysql.createConnection(dbConfig);
        await connection.execute(
            'UPDATE todos SET completed = TRUE, updated_at = NOW() WHERE id = ?',
            [id]
        );
        await connection.end();
        res.json({ message: 'Tarea marcada como completada' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    getTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    markAsCompleted
};
