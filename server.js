const express = require('express');
const { db } = require('./db');
const Event = require('./model/event');
const Guest = require('./model/guest');

Event.hasMany(Guest);
Guest.belongsTo(Event, { as: 'event' });

const dashboardRoutes = require('./routes/dashboard');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'pug');
app.use('/', dashboardRoutes);

db.sync()
    .then(() => {
        app.listen(PORT, console.log('Server is running on port: ' + PORT));
    }); 
