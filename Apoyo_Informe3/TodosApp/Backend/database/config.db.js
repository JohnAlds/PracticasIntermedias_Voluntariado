const mysql = require('mysql2/promise'); // Usa 'mysql2/promise' para soporte de promesas

const dbConfig = {
  host: '127.0.0.1',        // Cambia esto si tu servidor MySQL está en otro host
  user: 'root',             // Reemplaza con tu usuario de MySQL
  password: '04122013D',    // Reemplaza con tu contraseña de MySQL
  database: 'TODOS',        // Reemplaza con el nombre de tu base de datos
  port: 3307                // Asegúrate de que el puerto es un número, no una cadena
};

const dbConnection = async () => {
  let connection;
  try {
    // Crear una conexión con la base de datos
    connection = await mysql.createConnection(dbConfig);

    // Probar la conexión
    await connection.ping();
    console.log('Conexión exitosa a la base de datos');
    return 'Conexión exitosa';
  } catch (err) {
    console.error('Error conectando a la base de datos: ' + err.message);
    throw err;
  } finally {
    // Cerrar la conexión si se ha creado
    if (connection) {
      await connection.end();
    }
  }
};

module.exports = {
  dbConnection,
  dbConfig
};
