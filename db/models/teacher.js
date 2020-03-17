const seq = require('../connections/mysql_connect'),
      { STRING, INT, TEXT } = require('../../config/db_type_config');

const Teacher = seq.define('teacher', {
  tid: {
  	comment: 'teacher ID',
  	type: INT,
  	allowNull: false,
  	unique: true
  },
  href: {
  	comment: 'the link to teacher detail page',
  	type: STRING,
  	allowNull: false
  },
  teacherName: {
  	comment: 'teacher name',
  	type: STRING,
  	allowNull: false
  },
  teacherImg: {
  	comment: 'teacher image url',
  	type: STRING,
  	allowNull: false
  },
  courseCount: {
  	comment: 'course count of the teacher',
  	type: INT,
  	allowNull: false
  },
  studentCount: {
  	comment: 'student count of the teacher',
  	type: INT,
  	allowNull: false
  },
  intro: {
  	comment: 'teacher introduction',
  	type: TEXT,
  	allowNull: false
  },
  teacherImgKey: {
  	comment: 'qiniu teacher image name',
  	type: STRING,
  	allowNull: false
  },
  isStar: {
    comment: 'is the teacher a star teacher?',
    type: INT,
    defaultValue: 0,
    allowNull: false
  },
  status: {
    comment: 'teacher status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Teacher;










