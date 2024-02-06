const connection = require('../config/db');

// Get all sijainnit
exports.findAll = (req, res) => {
    connection.query('SELECT * FROM Sijainti', (err, rows) => {
        if (err) {
            // Correctly use the res object to send an error response
            res.status(500).send({ message: err.message || 'Some error occurred while retrieving sijainnit.' });
        } else {
            // Correctly use the res object to send the data as a JSON response
            console.log(rows)
        }
    });
};
