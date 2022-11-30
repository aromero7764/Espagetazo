
const {Sequelize} = require('sequelize')

//constructor                                                                                                                                                             
const db = new Sequelize({
  //con que db nos vamos a conectar
  dialect : 'postgres',
  host: 'localhost',
  database: 'users-db',
  username: 'postgres',
  password: 'root',
  port: 5432
})

module.exports = db
