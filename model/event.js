const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Guest = require('./Guest');

const Event = sequelize.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

// Define association with Guest model
Event.hasMany(Guest, { as: 'guests' });

module.exports = Event;
