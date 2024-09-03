import { useState } from 'react';
import axios from 'axios';

export const UsersForm = () => {
  const [nombreCompleto, setNombreCompleto] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [email, setEmail] = useState('');
  const [genero, setGenero] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/addUser', {
        nombre_completo: nombreCompleto,
        nombre_usuario: nombreUsuario,
        contrasena: contrasena,
        email: email,
        genero: genero,
      });
      console.log('Usuario agregado:', response.data);
      // Opcional: Limpiar el formulario o mostrar un mensaje de éxito
      setNombreCompleto('');
      setNombreUsuario('');
      setContrasena('');
      setEmail('');
      setGenero('');
    } catch (error) {
      console.error('Error al agregar usuario:', error);
      // Opcional: Mostrar un mensaje de error al usuario
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreCompleto">Nombre Completo</label>
        <input
          type="text"
          id="nombreCompleto"
          value={nombreCompleto}
          onChange={(e) => setNombreCompleto(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="nombreUsuario">Nombre Usuario</label>
        <input
          type="text"
          id="nombreUsuario"
          value={nombreUsuario}
          onChange={(e) => setNombreUsuario(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="contrasena">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Género</label>
        <div>
          <input
            type="radio"
            id="femenino"
            name="genero"
            value="Femenino"
            checked={genero === 'Femenino'}
            onChange={(e) => setGenero(e.target.value)}
          />
          <label htmlFor="femenino">Femenino</label>
        </div>
        <div>
          <input
            type="radio"
            id="masculino"
            name="genero"
            value="Masculino"
            checked={genero === 'Masculino'}
            onChange={(e) => setGenero(e.target.value)}
          />
          <label htmlFor="masculino">Masculino</label>
        </div>
      </div>
      <button type="submit">Agregar Usuario</button>
    </form>
  );
};
