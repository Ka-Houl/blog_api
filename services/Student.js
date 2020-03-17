const StudentModel = require('../db/models/student');

class StudentService {
  async addStudentData (data) {
  	const sid = data.sid;

  	const result = await StudentModel.findOne({
  		where: { sid }
  	});

  	if (result) {
  		return await StudentModel.update(data, {
  			where: { sid }
  		});
  	} else {
  		return await StudentModel.create(data);
  	}
  }

  async getStudentData () {
    return await StudentModel.findAll({
      attributes: {
        exclude: ['studentImg']
      }
    });
  }

  async changeStudentStatus (id, status) {
    const ret = await StudentModel.update({ status }, {
      where: { id }
    });

    return ret[0];
  }
}

module.exports = new StudentService();