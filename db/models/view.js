const seq = require('../connections/mysql_connect'),
  { STRING, INT, DECIMAL } = require('../../config/db_type_config')

const View = seq.define(
  'view',
  {
    id: {
      comment: 'course ID',
      type: INT,
      allowNull: true,
      unique: true,
      primaryKey: true
    },
    ip: {
      comment: 'course detail page link',
      type: STRING,
      allowNull: true
    },
    time: {
      comment: 'Page category title',
      type: STRING,
      allowNull: true
    }
  },
  {
    timestamps: false
  }
)

module.exports = View
