
import mysql from "mysql2/promise";

const dbConfig = {
    host: 'localhost',
    user: 'onkar',
    password: '123',
    database: 'TechnicalTalk'
};

const connect=await mysql.createConnection(dbConfig);


    try {
        const connection = connect;
        console.log("db connected succesfully !!!!!!");
    } catch (error) {
        console.error('Error connecting to database:', error);
    }

    export {connect};