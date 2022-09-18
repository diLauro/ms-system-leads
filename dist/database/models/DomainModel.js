"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _sequelize = require('sequelize');
var _db = require('../db');

 const DomainModel = _db.db.define("tb_domains", {
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
  },
  cod_domain: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
  },
  is_active: {
    type: _sequelize.DataTypes.BOOLEAN,
    allowNull: false,
  },
}); exports.DomainModel = DomainModel;
