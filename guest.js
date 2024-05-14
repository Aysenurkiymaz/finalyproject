const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Guest = sequelize.define('Guest', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    }
});

module.exports = Guest;

