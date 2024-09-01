import { useState } from 'react';
import axios from 'axios';

export const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Media');
  const [completed, setCompleted] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) return;

    // Construye el nuevo objeto de tarea
    const newTodo = {
      title,
      description,
      dueDate,
      priority,
      completed,
    };

    try {
      const response = await axios.post('http://localhost:8080/api/todos', newTodo, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setSuccess('Tarea agregada exitosamente');
      console.log(response.data); // Opcional: muestra el resultado en la consola

      // Reinicia los campos del formulario
      setTitle('');
      setDescription('');
      setDueDate('');
      setPriority('Media');
      setCompleted(false);
    } catch (err) {
      setError(err.response?.data?.error || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}

      <div>
        <label>Título de la Tarea:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Añadir una nueva tarea..."
          required
        />
      </div>

      <div>
        <label>Descripción:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Añadir una descripción..."
        />
      </div>

      <div>
        <label>Fecha de Vencimiento:</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>

      <div>
        <label>Prioridad:</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Alta">Alta</option>
          <option value="Media">Media</option>
          <option value="Baja">Baja</option>
        </select>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
          Completado
        </label>
      </div>

      <button type="submit">Añadir Tarea</button>
    </form>
  );
};
