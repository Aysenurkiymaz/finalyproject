const path = require('path');
const { Sequelize } = require('sequelize');

module.exports = {
    db: new Sequelize({
        dialect: 'sqlite',
        storage: path.join(__dirname, 'mvc_demo.sqlite'),
    }),
}
