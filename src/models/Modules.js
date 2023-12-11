const {DataTypes} = require('sequelize');
const sequelize = require('../utils/db');

const Modules = sequelize.define(
    'Modules', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      judul: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      deskripsi: {
        type: DataTypes.STRING,
        allowNull: false,
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
