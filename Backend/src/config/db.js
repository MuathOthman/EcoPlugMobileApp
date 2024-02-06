const express = require('express');
const mysql = require('mysql');

const app = express();
app.use(express.json());

const connection = mysql.createConnection({
    host: '10.120.36.50',
    port: '3306',
    user: 'root',
    password: 'dzBO=0%G7i43',
    database: 'EcoPlug'
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database.');
});

module.exports = connection;