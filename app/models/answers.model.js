
"use strict";
const questions = require('./questions.model')
const userAnswers = require('./userAnswers.model')
const Sequelize = require('sequelize')
const sequelize = require("../helpers/connection");

const answersmodel = sequelize.define(
  "answers",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    questionId:{
        type: Sequelize.INTEGER,
        allowNull: false,},
    answer:{
        type: Sequelize.STRING,
        allowNull: false,
    },
    type:{
        type: Sequelize.DataTypes.ENUM("introvert", "extrovert",),
        allowNull: false,
    }
  },
  
  {
    tableName: "answers",
    deletedAt: "deletedAt",
    paranoid: true,
    timestamps: true,
  }
);

questions.hasMany(answersmodel, {
    as: "answers",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "questionId",
    sourceKey: "id",
});
answersmodel.belongsTo(questions, {
  as: "question",
  foreignKey: "questionId",
  sourceKey: "id",
});

userAnswers.belongsTo(answersmodel, {
    as: "userAnswers",
    onDelete: "CASCADE",
    hooks: true,
    foreignKey: "answerId",
    sourceKey: "id",
});
module.exports = answersmodel;