const CollectionModel = require('../db/models/collection');

class CollectionService {
  async addCollection (data) {
    const cid = data.cid;

    const result = await CollectionModel.findOne({
    	where: { cid }
    });

    if (result) {
    	return await CollectionModel.update(data, {
    		where: { cid }
    	});
    } else {
    	return await CollectionModel.create(data);
    }
  }

  async getCollectionData () {
    return await CollectionModel.findAll({
      attributes: {
        exclude: ['posterUrl', 'courseIdList']
      }
    });
  }

  async changeCollectionStatus (id, status) {
    const ret = await CollectionModel.update({ status }, {
      where: { id }
    });

    return ret[0];
  }
}

module.exports = new CollectionService();