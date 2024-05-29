const { Sequelize, DataTypes } = require('sequelize');
const { db } = require('../db');

const Guest = db.define('Guest', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});



module.exports = Guest;



