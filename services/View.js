const ViewModel = require('../db/models/view')

class ViewService {
  async getView(data) {
    // const id = data.id

    // const result = await ViewModel.findOne({
    //   where: { id }
    // })
    const result = await ViewModel.findAll()

    // console.log('result-------', result, data)
    return result.length

    // if (result) {
    //   return await ViewModel.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ViewModel.create(data)
    // }
  }
  async addView(data) {
    // const id = data.id

    // const result = await ViewModel.findOne({
    //   where: { id }
    // })
    console.log(data)
    const result = await ViewModel.create(data)

    console.log('result-------', result, data)
    return result

    // if (result) {
    //   return await ViewModel.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ViewModel.create(data)
    // }
  }
  async findView(data) {
    // const id = data.id

    // const result = await ViewModel.findOne({
    //   where: { id }
    // })
    console.log(data)
    const result = await ViewModel.findOne({
      where: {
        id: '1111'
      }
    })

    console.log('result-------', result, data)
    return result

    // if (result) {
    //   return await ViewModel.update(data, {
    //     where: { id }
    //   })
    // } else {
    //   return await ViewModel.create(data)
    // }
  }
}

module.exports = new ViewService()
