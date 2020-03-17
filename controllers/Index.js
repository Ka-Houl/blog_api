const { getCourseData, changeField, changeCourseStatus } = require('../services/Course'),
      { getRecomCourseData, changeRecomCourseStatus } = require('../services/RecomCourse'),
      { getSliderData, changeSliderStatus } = require('../services/Slider'),
      { getCollectionData, changeCollectionStatus } = require('../services/Collection'),
      { getTeacherData, changeTeacherStatus, selectStarTeacher } = require('../services/Teacher'),
      { getStudentData, changeStudentStatus } = require('../services/Student'),
      { getCourseFieldData } = require('../services/CourseTab'),
      { returnInfo } = require('../libs/utils'),
      { API } = require('../config/error_config');

class Index {
  async getCourses (ctx, next) {
    const courseData = await getCourseData(),
          fieldData = await getCourseFieldData();

    ctx.body = courseData && fieldData
               ? returnInfo(API.RETURN_SUCCESS, {
               	   courseData,
               	   fieldData
                 })
               : returnInfo(API.RETURN_FAILED);
  }

  async getRecomCourses (ctx, next) {
    const data = await getRecomCourseData();
    
    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async getSliders (ctx, next) {
    const data = await getSliderData();
    
    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async getCollections (ctx, next) {
    const data = await getCollectionData();
    
    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async getTeachers (ctx, next) {
    const data = await getTeacherData();
    
    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async getStudents (ctx, next) {
    const data = await getStudentData();
    
    ctx.body = data 
             ? returnInfo(API.RETURN_SUCCESS, data)
             : returnInfo(API.RETURN_FAILED);
  }

  async changeCourseField (ctx, next) {
    const { cid, field } = ctx.request.body;

    const result = await changeField(cid, field);

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_FAILED);
      return;
    }

    ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_SUCCESS);
  }

  async changeDataStatus (ctx, next) {
    const { id, status, field } = ctx.request.body;
    let result = null;

    switch (field) {
      case 'COURSE':
        result = await changeCourseStatus(id, status);  
        break;
      case 'RECOM_COURSE':
        result = await changeRecomCourseStatus(id, status);
        break;
      case 'SLIDER':
        result = await changeSliderStatus(id, status);
        break;
      case 'COLLECTION':
        result = await changeCollectionStatus(id, status);
        break;
      case 'TEACHER':
        result = await changeTeacherStatus(id, status);
        break;
      case 'STUDENT':
        result = await changeStudentStatus(id, status);
        break;
      default:
        ctx.body = returnInfo(API.FIELD_ERROR);
        return;
    }

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_STATUS_FAILED);
      return;
    }

    ctx.body = returnInfo(API.CHANGE_STATUS_SUCCESS);
  }


  async changeTeacherStar (ctx, next) {
    const { id, isStar } = ctx.request.body;

    const result = await selectStarTeacher(id, isStar);

    if (!result) {
      ctx.body = returnInfo(API.SELECT_STAR_TEACHER_FAILED);
      return;
    }

    ctx.body = returnInfo(API.SELECT_STAR_TEACHER_SUCCESS);
  }
}

module.exports = new Index();










