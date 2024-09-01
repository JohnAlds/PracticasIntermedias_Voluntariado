import { useState, useEffect } from 'react';
import axios from 'axios';
import './Styles/Todo.css'

export const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/getTodos');
        setTodos(response.data);
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const handleComplete = async (id) => {
    try {
      await axios.patch(`http://localhost:8080/api/addTodo/complete/${id}`);
      setTodos(todos.map(todo =>
        todo.id === id ? { ...todo, completed: true } : todo
      ));
    } catch (error) {
      console.error('Error marking todo as completed:', error);
    }
  };

  const handleUpdate = async (id) => {
    // Implement update functionality here
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/addTodo/${id}`);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todos</h1>
      {todos.map(todo => (
        <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
          <div className="todo-title">{todo.title}</div>
          <div className="todo-description"><strong>Descripción:</strong>{todo.description}</div>
          <div className="todo-due-date"><strong>Fecha de finalización:</strong> {todo.due_date}</div>
          <div className="todo-priority"><strong>Prioridad:</strong> {todo.priority}</div>
          <div className="todo-buttons">
            
            <button className="complete-btn" onClick={() => handleComplete(todo.id)}>
              {todo.completed ? 'Completed' : 'Complete'}
            </button>
            <button className="delete-btn" onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};
