const router = require('koa-router')(),
indexController = require('../controllers/Index'),
articleListController = require('../controllers/ArticleList')
// loginCheck = require('../middlewares/loginCheck')

//loginCheck参数会做登录校验
router.get('/', indexController.index)
router.get('/getViewsNum', indexController.getViewsNum)
router.get('/addViewsNum', indexController.addViewsNum)
router.get('/findViewNum', indexController.findViewNum)
router.get('/getArticleList', articleListController.getArticleList)

// router.get('/json', loginCheck, async (ctx, next) => {
//   console.log('loginCheck', loginCheck)
//   ctx.body = {
//     title: 'koa112 json',
//     loginCheck: loginCheck
//   }
// })

module.exports = router
