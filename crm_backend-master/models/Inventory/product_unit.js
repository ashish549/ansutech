const Sequelize = require('sequelize');
const sequelize = require('../../db_config/db');


const ProductUnit = sequelize.define('productUnit', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    upper_unit: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    lower_unit: {
        type: Sequelize.STRING(10),
        allowNull: false
    },
    conversion_value: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'productUnit'
});

module.exports = ProductUnit;