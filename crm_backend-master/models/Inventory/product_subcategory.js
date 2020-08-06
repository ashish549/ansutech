const Sequelize = require('sequelize');
const sequelize = require('../../db_config/db');


const ProductSubCategory = sequelize.define('productSubCategory', {
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
    //Category.hasMany(ProductSubCategory, {foreignKey: 'category_id'})
}, {
    underscored: true,
    tableName: 'productSubCategory'
});

module.exports = ProductSubCategory;