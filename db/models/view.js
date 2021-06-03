const seq = require('../connections/mysql_connect'),
  { STRING, INT, DECIMAL } = require('../../config/db_type_config')

const View = seq.define('lr_view', {
  // id: {
  //   comment: 'course ID',
  //   type: INT,
  //   // allowNull: true,
  //   unique: true,
  //   primaryKey: true
  // },
  // ip: {
  //   comment: 'course detail page link',
  //   type: INT,
  //   // allowNull: true
  // },
  // time: {
  //   comment: 'Page category title',
  //   type: INT,
  //   // allowNull: true
  // }
})

module.exports = View
