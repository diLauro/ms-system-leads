import { DataTypes } from "sequelize";
import { db } from "../db";

export const SalesmanModel = db.define(
  "tb_salesmans",
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
  },
  {
    underscored: true,
  }
);
