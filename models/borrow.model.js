import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"

const Borrow = sequelize.define('borrow', {
   borrow_id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true
  },
  book_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  member_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  borrow_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  return_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },
  status: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
}, 
{
  sequelize,
  tableName: 'borrow',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "borrow_id" },
      ]
    },
  ]
});

export default Borrow;