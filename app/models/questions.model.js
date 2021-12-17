const Sequelize = require('sequelize')
const sequelize = require("../helpers/connection");

const quesionsmodel = sequelize.define(
  "questions",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    question:{
        type: Sequelize.STRING,
        allowNull: false,
    }
  },
  
  {
    tableName: "questions",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = quesionsmodel;