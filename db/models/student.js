const seq = require('../connections/mysql_connect'),
      { STRING, INT, TEXT } = require('../../config/db_type_config');

const Student = seq.define('student', {
  sid: {
  	comment: 'student ID',
  	type: INT,
  	allowNull: false,
  	unique: true,
  },
  studentImg: {
  	comment: 'student image url',
  	type: STRING,
  	allowNull: false
  },
  studentName: {
  	comment: 'student name',
  	type: STRING,
  	allowNull: false
  },
  intro: {
  	comment: 'student introduction',
  	type: TEXT,
  	allowNull: false
  },
  courseName: {
  	comment: 'the course name which this.student concerned',
  	type: STRING,
  	allowNull: false
  },
  courseLink: {
  	comment: 'this link of the course which the student concerned',
  	type: STRING,
  	allowNull: false
  },
  studentImgKey: {
  	comment: 'qiniu student image name',
  	type: STRING,
  	allowNull: false
  },
  status: {
  	comment: 'student status',
    type: INT,
    defaultValue: 1,
    allowNull: false
  }
});

module.exports = Student;
