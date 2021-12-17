const Sequelize = require('sequelize')

    
const sequelize = new Sequelize('personality_test', 'root', '', {
    host: 'localhost',
    dialect:'mysql',
    logging: false
  });

 
  module.exports = sequelize;