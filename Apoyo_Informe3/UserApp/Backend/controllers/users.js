const { response } = require('express');
const mysql = require('mysql2/promise');
const { dbConfig } = require('../database/config.db');

// Obtener todos los usuarios
const getUsers = async (req, res = response) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const [rows] = await connection.execute('SELECT * FROM usuarios');
    connection.end();
    res.json(rows);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener los usuarios', error });
  }
};

// Agregar un usuario
const addUser = async (req, res = response) => {
  try {
    const { nombre_completo, nombre_usuario, contrasena, email, genero } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'INSERT INTO usuarios (nombre_completo, nombre_usuario, contrasena, email, genero) VALUES (?, ?, ?, ?, ?)',
      [nombre_completo, nombre_usuario, contrasena, email, genero]
    );
    connection.end();
    res.status(201).json({ msg: 'Usuario agregado exitosamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al agregar el usuario', error });
  }
};

// Actualizar Nombre de usuario
const updateNameUser = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { nombre_usuario } = req.body;
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute(
      'UPDATE usuarios SET nombre_usuario = ? WHERE id = ?',
      [nombre_usuario, id]
    );
    connection.end();
    res.json({ msg: 'Nombre de usuario actualizado exitosamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar el nombre de usuario', error });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res = response) => {
  try {
    const { id } = req.params;
    const connection = await mysql.createConnection(dbConfig);
    await connection.execute('DELETE FROM usuarios WHERE id = ?', [id]);
    connection.end();
    res.json({ msg: 'Usuario eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar el usuario', error });
  }
};

module.exports = {
  getUsers,
  addUser,
  updateNameUser,
  deleteUser,
};
