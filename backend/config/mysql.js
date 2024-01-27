const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'socialize'
});

// Connecter à la base de données
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to database');
});

// Exporter la connexion pour pouvoir l'utiliser ailleurs si nécessaire
module.exports = connection;