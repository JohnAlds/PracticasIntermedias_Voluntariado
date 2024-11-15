const mysql = require('mysql2/promise'); 

const dbConfig = {
  host: 'db',                      
  user: 'databaseuser',                
  password: '1324',          
  database: 'mydatabase',                    
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
