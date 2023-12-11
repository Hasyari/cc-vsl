const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const Modules = sequelize.define(
    'Modules', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      huruf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: 'module',
    },
);

module.exports = Modules;
