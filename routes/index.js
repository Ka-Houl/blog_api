const router = require('koa-router')(),
  indexController = require('../controllers/Index'),
  loginCheck = require('../middlewares/loginCheck')

//loginCheck参数会做登录校验
router.get('/', indexController.index)
router.get('/getViewsNum', indexController.getViewsNum)
router.get('/addViewsNum', indexController.addViewsNum)
router.get('/findViewNum', indexController.findViewNum)

router.get('/json', loginCheck, async (ctx, next) => {
  console.log('loginCheck', loginCheck)
  ctx.body = {
    title: 'koa112 json',
    loginCheck: loginCheck
  }
})

router.get('/get_courses', loginCheck, indexController.getCourses)
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses)
router.get('/get_sliders', loginCheck, indexController.getSliders)

module.exports = router
