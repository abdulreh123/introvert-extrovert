const Sequelize = require('sequelize')
const sequelize = require("../helpers/connection");

const quesionsmodel = sequelize.define(
  "user_answers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    user:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    answerId:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
  },
  
  {
    tableName: "user_answers",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

module.exports = quesionsmodel;