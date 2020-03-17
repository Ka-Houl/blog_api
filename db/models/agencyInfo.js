const seq = require('../connections/mysql_connect'),
      { STRING, INT } = require('../../config/db_type_config');

const AgencyInfo = seq.define('agency_info', {
  logoUrl: {
  	comment: 'Logo image url',
  	type: STRING,
  	allowNull: false
  },
  name: {
  	comment: 'Agency name',
  	type: STRING,
  	allowNull: false
  },
  feedbackRate: {
  	comment: 'Feedback rate',
  	type: INT,
  	allowNull: false
  },
  studentCount: {
  	comment: 'Student total count',
  	type: INT,
  	allowNull: false
  },
  description: {
  	comment: 'Agency slogan',
  	type: STRING,
  	allowNull: false
  },
  qqLink: {
  	comment: 'QQ information link',
  	type: STRING,
  	allowNull: false
  },
  logoKey: {
  	comment: 'Qiniu logo image name',
    type: STRING,
    allowNull: false
  }
});

module.exports = AgencyInfo;