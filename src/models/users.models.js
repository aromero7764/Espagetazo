const { DataTypes } = require('sequelize')

const db = require('../utils/database')

/* USERS 
 {
  id: 1,
  first_name: 'string',
  last_name: 'string',
  email: 'string',
  password: 'string',
  birthday: 'YYYY/MM/DD'
}
 */

const Users = db.define('users', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
      type: DataTypes.STRING,
      allowNull: false
  },
  birthday: {
    type: DataTypes.STRING,
      allowNull: true
  } 

},
{
  timestamps: false
}

)

module.exports = Users

