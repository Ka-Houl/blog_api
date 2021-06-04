const { getView, addView, findView } = require('../services/View'),
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
    //在页面中渲染session信息
    const data = await addView({
      ip: host,
      time: new Date() * 1
    })

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
      updatedAt: 7,
      id: 1
    })

    const data = addViewRes
    ctx.body = data
      ? returnInfo(API.COMMON_SUCCESS, data)
      : returnInfo(API.COMMON_FAILED)
  }
}

module.exports = new Index()
