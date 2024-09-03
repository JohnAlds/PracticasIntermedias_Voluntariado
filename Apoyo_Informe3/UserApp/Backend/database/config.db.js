const mysql = require('mysql2/promise'); 

const dbConfig = {
  host: '127.0.0.1',                      
  user: 'root',               
  password: 'whillm@n1324@@UING@',          
  database: 'user',              
  port: 3306                    
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
