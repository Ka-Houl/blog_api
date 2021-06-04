const router = require('koa-router')(),
  indexController = require('../controllers/Index'),
  articleListController = require('../controllers/ArticleList')

router.get('/', indexController.index)
router.get('/getViewsNum', indexController.getViewsNum)
router.get('/addViewsNum', indexController.addViewsNum)
router.get('/findViewNum', indexController.findViewNum)
router.get('/getArticleList', articleListController.getArticleList)

module.exports = router
