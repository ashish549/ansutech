const Sequelize = require('sequelize');
const sequelize = require('../../db_config/db');


const ProductSpecification = sequelize.define('productSpecification', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    underscored: true,
    tableName: 'productSpecification'
});

module.exports = ProductSpecification;