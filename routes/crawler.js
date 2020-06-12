const router = require('koa-router')(),
    crawlerController = require('../controllers/Crawler'),
    loginCheck = require('../middlewares/loginCheck');
console.log(111)
router.get('/json', async (ctx, next) => {
    console.log(2222)

    ctx.body = {
        title: 'koa2 json',
    };
});
router.prefix('/crawler'); //加上默认前缀

router.get('/crawl_slider_data', loginCheck, crawlerController.crawlSliderData);
router.get('/crawl_agency_info', loginCheck, crawlerController.crawlAgencyInfo);
router.get('/crawl_recom_course', loginCheck, crawlerController.crawlRecomCourse);
router.get('/crawl_collection', loginCheck, crawlerController.crawlCollection);
router.get('/crawl_teacher', loginCheck, crawlerController.crawlTeacher);
router.get('/crawl_student', loginCheck, crawlerController.crawlStudent);
router.get('/crawl_course_tab', loginCheck, crawlerController.crawlCourseTab);
router.get('/crawl_course_data', loginCheck, crawlerController.crawlCourseData);
router.get('/crawl_aboutus', loginCheck, crawlerController.crawlAboutus);
router.get('/json', async (ctx, next) => {
    console.log(33333)

    ctx.body = {
        title: 'koa2 json',
    };
});
const pt = require('puppeteer');
module.exports = router;
