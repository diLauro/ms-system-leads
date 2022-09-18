"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _db = require('../db');

 const UserModel = _db.db.define("tb_users", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
  },
  
}); exports.UserModel = UserModel;
