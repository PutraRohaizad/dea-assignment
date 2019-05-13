const Sequelize = require("sequelize")
const db = {}
const sequelize = new Sequelize("CompReg", "root", "", 
{
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,

    pool: 
    {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db

// module.exports = {
//     'connection':{
//      'host':'localhost',
//      'user':'root1',
//      'password':''
//     },
//     'database':'New',
//     'user_table':'Register'
//    }