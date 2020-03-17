const CourseTabModel = require('../db/models/courseTab');

class CourseTabService {
  async addCourseTab (data) {
  	const cid = data.cid;

  	const result = await CourseTabModel.findOne({
  		where: { cid }
  	});

  	if (result) {
  		return await CourseTabModel.update(data, {
  			where: {cid }
  		});
  	} else {
  		return await CourseTabModel.create(data);
  	}
  }

  async getCourseFieldData () {
    return await CourseTabModel.findAll({
      attributes: {
        exclude: ['cid']
      }
    });
  }
}

module.exports = new CourseTabService();