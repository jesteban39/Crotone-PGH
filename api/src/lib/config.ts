import dotenv from 'dotenv';

dotenv.config();

console.log("env: ",process.env);

const config = {
  dbUser: process.env.DB_USER || 'postgres',
  dbPassword: process.env.DB_PASSWORD || 'password',
  dbHost: process.env.DB_HOST || 'localhost',
  dbName: process.env.DB_NAME || 'socialclub',
  dbPort: process.env.DB_PORT || '5432',
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.API_PORT || '3001',
  host: process.env.API_HOST || 'localhost',
  cors: process.env.CORS || 'localhost:3000',
};

console.log("cof: ",config);

export default config;