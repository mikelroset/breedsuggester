import mysql from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;

let connection;

try {
  async function connectDB() {
    connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      database: DB_NAME,
      port: DB_PORT,
      password: DB_PASSWORD,
    });
  }

  connectDB().catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
} catch (err) {
  console.error('Error al configurar la conexión a la base de datos:', err);
}

export default connection;
