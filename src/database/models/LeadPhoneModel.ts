import { DataTypes } from "sequelize";
import { db } from "../db";
import { LeadModel } from "./LeadModel";

export const LeadPhoneModel = db.define(
  "tb_lead_phones",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

LeadPhoneModel.belongsTo(LeadModel, {
  constraints: true,
  foreignKey: 'lead_id'
})

LeadModel.hasMany(LeadPhoneModel, {
  foreignKey: 'lead_id'
})