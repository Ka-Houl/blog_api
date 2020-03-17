const seq = require('../connections/mysql_connect'),
      { STRING, INT, DECIMAL } = require('../../config/db_type_config');

const RecomCourse = seq.define('recom_course', {
  cid: {
    comment: 'course ID',
    type: INT,
    allowNull: false,
    unique: true
  },
  href: {
  	comment: 'course detail page link',
  	type: STRING,
  	allowNull: false
  },
  mainTitle: {
  	comment: 'Page category title',
  	type: STRING,
  	allowNull: false
  },
  title: {
  	comment: 'course name',
  	type: STRING,
  	allowNull: false
  },
  posterUrl: {
  	comment: 'course poster image',
  	type: STRING,
  	allowNull: false,
  },
  description: {
  	comment: 'course description',
  	type: STRING,
  	allowNull: false
  },
  teacherImg: {
  	comment: 'teacher image',
  	type: STRING,
  	allowNull: false
  },
  teacherName: {
  	comment: 'teacher name',
  	type: STRING,
  	allowNull: false
  },
  studentCount: {
  	comment: 'count of students who purchased this course',
  	type: INT,
  	allowNull: false
  },
  price: {
		comment: 'course price',
		type: DECIMAL,
		allowNull: false
	},
	posterKey: {
		comment: 'qiniu course image name',
		type: STRING,
		allowNull: false
	},
	teacherImgKey: {
		comment: 'qiniu teacher image name',
		type: STRING,
		allowNull: false
	},
  status: {
    comment: 'course status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = RecomCourse;















