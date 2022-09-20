import { DataTypes } from "sequelize";
import { db } from "../db";
import { SalesmanModel } from "./SalesmanModel";

export const UserModel = db.define(
  "tb_users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
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

UserModel.belongsTo(SalesmanModel, {
  constraints: true,
  foreignKey: "salesman_id",
});
