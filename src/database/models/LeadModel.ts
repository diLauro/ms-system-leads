import { DataTypes } from "sequelize";
import { db } from "../db";
import { DomainModel } from "./DomainModel";
import { MidiaModel } from "./MidiaModel";
import { SalesmanModel } from "./SalesmanModel";

export const LeadModel = db.define(
  "tb_leads",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    cpf: {
      type: DataTypes.STRING,
    },
    cnh: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    msg: {
      type: DataTypes.TEXT,
    },
  },
  {
    underscored: true,
  }
);

LeadModel.belongsTo(SalesmanModel, {
  constraints: true,
  foreignKey: "salesman_id",
});

LeadModel.belongsTo(DomainModel, {
  constraints: true,
  foreignKey: "service_id",
});

LeadModel.belongsTo(DomainModel, {
  constraints: true,
  foreignKey: "origin_id",
});

LeadModel.belongsTo(DomainModel, {
  constraints: true,
  foreignKey: "status_id",
});

LeadModel.belongsTo(MidiaModel, {
  constraints: true,
  foreignKey: "midia_id",
});
