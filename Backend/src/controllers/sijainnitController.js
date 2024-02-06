const sijainnitModel = require('../models/sijainnitModels');

// Get all sijainnit
exports.findAll = (req, res) => {
    sijainnitModel.findAll((err, rows) => {
        if (err) {
            res.status(500).send({ message: err.message || 'Some error occurred while retrieving sijainnit.' });
        } else {
            res.send(rows);
        }
    });
};

