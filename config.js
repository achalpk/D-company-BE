const dotenv = require('dotenv');
dotenv.config({ path:`${process.env.NODE_ENV}.env` });
module.exports = {
    port: process.env.PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    key: process.env.JWT_KEY,
    environment: process.env.NODE_ENV
};