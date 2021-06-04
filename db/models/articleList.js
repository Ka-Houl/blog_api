const seq = require('../connections/mysql_connect'),
  { STRING, INT, DECIMAL } = require('../../config/db_type_config')

const ArtitleList = seq.define(
  'articleList',
  {
    id: {
      comment: 'course ID',
      type: INT,
      allowNull: true,
      unique: true,
      primaryKey: true
    },
    name: {
      comment: 'page name',
      type: STRING,
      allowNull: true
    },
    description: {
      comment: 'page name',
      type: STRING,
      allowNull: true
    },
    img: {
      comment: 'page detail img',
      type: STRING,
      allowNull: true
    },
    url: {
      comment: 'page url',
      type: STRING,
      allowNull: true
    },
  },
  {
    timestamps: false
  }
)

module.exports = ArtitleList
