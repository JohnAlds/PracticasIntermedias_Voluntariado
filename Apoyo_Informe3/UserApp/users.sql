CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre_completo VARCHAR(255) NOT NULL,
  nombre_usuario VARCHAR(100) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  genero ENUM('Femenino', 'Masculino') NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
