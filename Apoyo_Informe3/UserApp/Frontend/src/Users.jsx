import { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/Users.css';

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Función para obtener los usuarios
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getUsers');
        setUsers(response.data);
      } catch (error) {
        console.error('Error al obtener usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteUser/${id}`);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
    }
  };

  const handleUpdate = async (id, newName) => {
    try {
      await axios.patch(`http://localhost:8080/api/updateUser/${id}`, { nombre_usuario: newName });
      setUsers(users.map(user => (user.id === id ? { ...user, nombre_usuario: newName } : user)));
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
    }
  };

  return (
    <div className="users-container">
      {users.map(user => (
        <div key={user.id} className="user-card">
          <h3>{user.nombre_completo}</h3>
          <p>Nombre Usuario: {user.nombre_usuario}</p>
          <p>Email: {user.email}</p>
          <p>Género: {user.genero}</p>
          <button onClick={() => handleDelete(user.id)}>Eliminar</button>
          <button onClick={() => {
            const newName = prompt('Introduce el nuevo nombre de usuario:');
            if (newName) handleUpdate(user.id, newName);
          }}>Actualizar Nombre de Usuario</button>
        </div>
      ))}
    </div>
  );
};
