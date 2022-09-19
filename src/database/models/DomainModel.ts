import { DataTypes } from "sequelize";
import { db } from "../db";

export const DomainModel = db.define(
  "tb_domains",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type_domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cod_domain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);
