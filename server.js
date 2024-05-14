const express = require('express');
const dashboardRoutes = require('./routes/dashboard');
const db = require('./db.js');

const app = express();
const PORT = 8080;

app.listen(PORT, () => console.log('Server is running on port: ' + PORT));

app.use(express.urlencoded({extended: false}));
app.set('view engine', 'pug');
app.use('/', dashboardRoutes);

db.sync({force: false})
    .then(() => {
        // app.listen(PORT, console.log('Server is running on port: ' + PORT));
    });
