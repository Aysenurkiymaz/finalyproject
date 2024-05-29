const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../db');
const Guest = require('./Guest');

const Event = db.define('Event', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    organization: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

// Define association with Guest model

module.exports = Event;
