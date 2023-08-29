const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const PORT = 3001;

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'kkljjh',
    database: 'korea_data'
});

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // If you intend to use JSON body parsing

app.get('/stocks', (req, res) => {
    // Query to get the latest date
    const latestDateQuery = "SELECT MAX(기준일) AS latestDate FROM sector";

    db.query(latestDateQuery, (err, dateResult) => {
        if (err) {
            console.error('Error querying the database for latest date:', err);
            return res.status(500).send('Internal Server Error');
        }

        // Get the latest date from the query result
        const latestDate = dateResult[0].latestDate;

        if (latestDate) {
            // Use parameterized query to fetch data
            const sqlSelect = "SELECT CMP_CD, CMP_KOR FROM sector WHERE 기준일 = ?";

            db.query(sqlSelect, [latestDate], (err, result) => {
                if (err) {
                    console.error('Error querying the database:', err);
                    return res.status(500).send('Internal Server Error');
                }

                res.json(result);
            });
        } else {
            res.status(404).send('Latest date not found');
        }
    });
});


app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});


