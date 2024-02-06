const connection = require('../config/db');

// Get all sijainnit
exports.findAll = (req, res) => {
    connection.query('SELECT * FROM Sijainti', (err, rows) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Some error occurred while retrieving sijainnit.' });
        } else {
            console.log(`Retrieved ${rows.length} sijainni records:`);
            console.table(rows);

            res.json(rows);
        }
    });
};

