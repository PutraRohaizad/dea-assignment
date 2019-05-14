const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'user',
  {
    CompRegNo: {
      type: Sequelize.VARCHAR,
      primaryKey: true,
      
    },
      Password: {
      type: Sequelize.TEXT
    },
    created: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  },
  {
    timestamps: false
  }
)
