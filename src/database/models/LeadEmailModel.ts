import { DataTypes } from "sequelize";
import { db } from "../db";
import { LeadModel } from "./LeadModel";

export const LeadEmailModel = db.define(
  "tb_lead_emails",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    lead_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    underscored: true,
  }
  );

  LeadEmailModel.belongsTo(LeadModel, {
    constraints: true,
    foreignKey: 'lead_id'
  })
  
