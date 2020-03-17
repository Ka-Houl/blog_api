const TeacherModel = require('../db/models/teacher');

class TeacherService {
  async addTeacherData (data) {
  	const tid = data.tid;

  	const result = await TeacherModel.findOne({
  		where: { tid }
  	});

  	if (result) {
  		return await TeacherModel.update(data, {
  			where: { tid }
  		});
  	} else {
  		return await TeacherModel.create(data);
  	}
  }

  async getTeacherData () {
    return await TeacherModel.findAll({
      attributes: {
        exclude: ['tid', 'teacherImg']
      }
    });
  }

  async changeTeacherStatus (id, status) {
    const ret = await TeacherModel.update({ status }, {
      where: { id }
    });

    return ret[0];
  }

  async selectStarTeacher (id, isStar) {
    const ret = await TeacherModel.update({ isStar }, {
      where: { id }
    });

    return ret[0];
  }
}

module.exports = new TeacherService();