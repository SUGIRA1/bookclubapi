import Sequelize from "sequelize";
import {sequelize} from "../db/dbconnect.js"

const Book = sequelize.define('book', {
  title: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  author: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  ISBN: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  copies: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  genre: {
    type: Sequelize.STRING(255),
    allowNull: false
  },
  book_id: {
    autoIncrement: true,
    type: Sequelize.BIGINT,
    allowNull: true,
    primaryKey: true
  },
  publication_date: {
    type: Sequelize.DATEONLY,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'books',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "book_id" },
      ]
    },
  ]
});

export default Book;