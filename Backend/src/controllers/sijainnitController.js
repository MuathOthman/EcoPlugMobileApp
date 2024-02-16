const connection = require('../config/db');

const findAll = (req, res) => {
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

const findOne = (req, res) => {
    const name = req.params.id;
    connection.query('SELECT COUNT(*) AS count FROM Latauspiste L JOIN sijaitsee S ON L.latauspisteID = S.latauspisteID JOIN Sijainti SI ON S.sijainti_ID = SI.sijainti_ID WHERE SI.sijainti_ID = ? AND L.tila = 0;', [name],
        (err, rows) => {
            if (err) {
                console.log([name])
                res.status(500).send({ message: err.message || `Error retrieving sijainti with name ${name}.` });
            } else {
                console.log(`Retrieved sijainti with name ${name}:`);
                console.table(rows);
                res.json(rows);
            }
        }
    );
};


module.exports ={
    findAll,
    findOne
};


