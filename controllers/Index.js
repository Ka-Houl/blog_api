const { getView, addView, findView } = require('../services/View'),
  {
    getCourseData,
    changeField,
    changeCourseStatus
  } = require('../services/Course'),
  {
    getRecomCourseData,
    changeRecomCourseStatus
  } = require('../services/RecomCourse'),
  { getSliderData, changeSliderStatus } = require('../services/Slider'),
  {
    getCollectionData,
    changeCollectionStatus
  } = require('../services/Collection'),
  {
    getTeacherData,
    changeTeacherStatus,
    selectStarTeacher
  } = require('../services/Teacher'),
  { getStudentData, changeStudentStatus } = require('../services/Student'),
  { getCourseFieldData } = require('../services/CourseTab'),
  { returnInfo } = require('../libs/utils'),
  { API } = require('../config/error_config')

class Index {
  async index(ctx, next) {
    console.log('11111111111')

    //在页面中渲染session信息
    ctx.body = {
      session: 123123123
    }

    // await ctx.render('index2')  //渲染idnex.ejs
  }
  async getViewsNum(ctx, next) {
    console.log('11111111111')
    //在页面中渲染session信息
    const getViewRes = await getView()
    //   {
    //   id: 2,
    //   time: '1214',
    //   ip: '324324'
    //   // updatedAt: 3,
    //   // createdAt: 5
    // }
    const data = {
      num: getViewRes
    }
    ctx.body = data
      ? returnInfo(API.COMMON_SUCCESS, data)
      : returnInfo(API.COMMON_FAILED)
  }
  async addViewsNum(ctx, next) {
    console.log('ctx.request', ctx.request)
    console.log('ctx.query', ctx.query)
    const {
      header: { host }
    } = ctx.request
    debugger
    //在页面中渲染session信息
    const data = await addView({
      ip: host,
      time: new Date() * 1
    })
    //   {
    //   id: 2,
    //   time: '1214',
    //   ip: '324324'
    //   // updatedAt: 3,
    //   // createdAt: 5
    // }
    ctx.body = data
      ? returnInfo(API.COMMON_SUCCESS, data)
      : returnInfo(API.COMMON_FAILED)
  }
  async findViewNum(ctx, next) {
    console.log(ctx)
    console.log('11111111111')
    //在页面中渲染session信息
    const addViewRes = await findView({
      ip: 11111,
      time: 123123,
      createdAt: 5,
      updatedAt: 7
    })
    //   {
    //   id: 2,
    //   time: '1214',
    //   ip: '324324'
    //   // updatedAt: 3,
    //   // createdAt: 5
    // }
    const data = addViewRes
    ctx.body = data
      ? returnInfo(API.COMMON_SUCCESS, data)
      : returnInfo(API.COMMON_FAILED)
  }
  async getCourses(ctx, next) {
    // const sess = ctx.session  获取到session
    const courseData = await getCourseData(),
      fieldData = await getCourseFieldData()

    ctx.body =
      courseData && fieldData
        ? returnInfo(API.RETURN_SUCCESS, {
            courseData,
            fieldData
          })
        : returnInfo(API.RETURN_FAILED)
  }

  async getRecomCourses(ctx, next) {
    const data = await getRecomCourseData()

    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED)
  }

  async getSliders(ctx, next) {
    const data = await getSliderData()
    // console.log('data',data)
    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED)
  }

  async getCollections(ctx, next) {
    const data = await getCollectionData()

    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED)
  }

  async getTeachers(ctx, next) {
    const data = await getTeacherData()

    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED)
  }

  async getStudents(ctx, next) {
    const data = await getStudentData()

    ctx.body = data
      ? returnInfo(API.RETURN_SUCCESS, data)
      : returnInfo(API.RETURN_FAILED)
  }

  async changeCourseField(ctx, next) {
    const { cid, field } = ctx.request.body

    const result = await changeField(cid, field)

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_FAILED)
      return
    }

    ctx.body = returnInfo(API.CHANGE_COURSE_FIELD_SUCCESS)
  }

  async changeDataStatus(ctx, next) {
    const { id, status, field } = ctx.request.body
    let result = null

    switch (field) {
      case 'COURSE':
        result = await changeCourseStatus(id, status)
        break
      case 'RECOM_COURSE':
        result = await changeRecomCourseStatus(id, status)
        break
      case 'SLIDER':
        result = await changeSliderStatus(id, status)
        break
      case 'COLLECTION':
        result = await changeCollectionStatus(id, status)
        break
      case 'TEACHER':
        result = await changeTeacherStatus(id, status)
        break
      case 'STUDENT':
        result = await changeStudentStatus(id, status)
        break
      default:
        ctx.body = returnInfo(API.FIELD_ERROR)
        return
    }

    if (!result) {
      ctx.body = returnInfo(API.CHANGE_STATUS_FAILED)
      return
    }

    ctx.body = returnInfo(API.CHANGE_STATUS_SUCCESS)
  }

  async changeTeacherStar(ctx, next) {
    const { id, isStar } = ctx.request.body

    const result = await selectStarTeacher(id, isStar)

    if (!result) {
      ctx.body = returnInfo(API.SELECT_STAR_TEACHER_FAILED)
      return
    }

    ctx.body = returnInfo(API.SELECT_STAR_TEACHER_SUCCESS)
  }
}

module.exports = new Index()
