const Sequelize = require('sequelize');
const sequelize = require('../../db_config/db');


const ProductBrand = sequelize.define('productBrand', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    available: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
}, {
    underscored:true,
    tableName: 'productBrand'
});

module.exports = ProductBrand;