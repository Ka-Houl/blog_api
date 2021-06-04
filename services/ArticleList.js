const ArtitleList = require('../db/models/articleList')

class ArticleListService {
  async getArticleList(data) {
    // const id = data.id

    // const result = await ArtitleList.findOne({
    //   where: { id }
    // })
    const result = await ArtitleList.findAll()

    // console.log('result-------', result, data)
    return result

    // if (result) {
    //   return await ArtitleList.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ArtitleList.create(data)
    // }
  }
  async addView(data) {
    // const id = data.id

    // const result = await ArtitleList.findOne({
    //   where: { id }
    // })
    console.log(data)
    const result = await ArtitleList.create(data)

    // console.log('result-------', result, data)
    return result

    // if (result) {
    //   return await ArtitleList.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ArtitleList.create(data)
    // }
  }
  async findView(data) {
    const id = data.id

    // const result = await ArtitleList.findOne({
    //   where: { id }
    // })
    console.log(data)
    const result = await ArtitleList.findOne({
      where: {
        id
      }
    })

    console.log('result-------', result, data)
    return result

    // if (result) {
    //   return await ArtitleList.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ArtitleList.create(data)
    // }
  }
}

module.exports = new ArticleListService()
