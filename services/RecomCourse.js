const RecomCourseModel = require('../db/models/recomCourse');

class RecomCourseService {
  async addRecomCourse (data) {
  	const cid = data.cid;

  	const result = await RecomCourseModel.findOne({
  		where: { cid }
  	});

  	if (result) {
      return await RecomCourseModel.update(data, {
      	where: { cid }
      });
  	} else {
      return await RecomCourseModel.create(data);
  	}
  }

  async getRecomCourseData () {
    return await RecomCourseModel.findAll({
      attributes: {
        exclude: ['mainTItle', 'posterUrl', 'description', 'teacherImg']
      }
    });
  }

  async changeRecomCourseStatus (id, status) {
    const ret = await RecomCourseModel.update({ status }, {
      where: { cid: id }
    });

    return ret[0];
  }
}

module.exports = new RecomCourseService();