const { getArticleList } = require('../services/ArticleList'),
  { returnInfo } = require('../libs/utils'),
  { API } = require('../config/error_config')

class ArticleList {
  async getArticleList(ctx, next) {
    console.log('11111111111')
    const getViewRes = await getArticleList()
    const data = getViewRes
    ctx.body = data
      ? returnInfo(API.COMMON_SUCCESS, data)
      : returnInfo(API.COMMON_FAILED)
  }
}

module.exports = new ArticleList()
