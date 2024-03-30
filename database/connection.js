import { createPool } from 'mysql2/promise';

const { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } = process.env;
const WAIT_FOR_CONNECTIONS = true;
const CONNECTION_LIMIT = 10;
const QUEUE_LIMIT = 0;

let pool;

try {
    pool = createPool({
        host: DB_HOST,
        user: DB_USER,
        database: DB_NAME,
        port: DB_PORT,
        password: DB_PASSWORD,
        waitForConnections: WAIT_FOR_CONNECTIONS,
        connectionLimit: CONNECTION_LIMIT,
        queueLimit: QUEUE_LIMIT,
    });

    console.log('Database connection established successfully.');
} catch (error) {
    console.error('Error connecting to the database:', error.message);
}

// Error handling when creating the connection pool
pool.on('error', (err) => {
    console.error('Error in the connection pool:', err.message);
});

// Closing the connection pool when closing the application
process.on('SIGINT', () => {
    pool.end().then(() => {
        console.log('Connection pool closed.');
        process.exit(0);
    });
});

export default pool;
