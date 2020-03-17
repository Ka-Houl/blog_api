const seq = require('../connections/mysql_connect'),
      { STRING, TEXT, INT } = require('../../config/db_type_config');

const Admin = seq.define('admin', {
  username: {
  	comment: 'admin user name',
  	type: STRING,
  	allowNull: false
  },
  password: {
  	comment: 'crypto user password',
  	type: STRING,
  	allowNull: false
  }
});

module.exports = Admin;