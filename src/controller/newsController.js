const db = require('../config/db')

const getNewsAll = (req, res) => {
    const query = `SELECT * FROM news`;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).send('Error retrieving data');
            return;
        }
        res.json(results);
    });
};

const getNewsSpecified = (req, res) => {
    const id = req.params.id; // Extract ID from request params
    const query = `SELECT * FROM news WHERE id = ${id}`;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error executing query:', err);
            res.status(500).json({ message: "Error retrieving data" });
            return;
        }   
        if (results.length === 0) {
            res.status(404).json({ message: "No data found with the specified ID"});
            return;
        }   
        const data = results[0]; // Process query results
        res.json(data);
    });
};

module.exports = {
    getNewsAll,
    getNewsSpecified
}