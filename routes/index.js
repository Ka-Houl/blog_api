const router = require('koa-router')(),
    indexController = require('../controllers/Index'),
    loginCheck = require('../middlewares/loginCheck');

const pt = require('puppeteer');

//loginCheck参数会做登录校验
router.get('/', indexController.index);

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa112 json',
    };
});

router.get('/get_courses', loginCheck, indexController.getCourses);
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses);
router.get('/get_sliders', loginCheck, indexController.getSliders);
router.get('/get_collections', loginCheck, indexController.getCollections);
router.get('/get_teachers', loginCheck, indexController.getTeachers);
router.get('/get_students', loginCheck, indexController.getStudents);

router.post('/change_course_field', loginCheck, indexController.changeCourseField);
router.post('/change_status', loginCheck, indexController.changeDataStatus);
router.post('/select_star_teacher', loginCheck, indexController.changeTeacherStar);

router.get('/kkk', async (ctx, next) => {
    console.log(11111111);

    const bs = await pt.launch(),
        url = 'https://msiwei.ke.qq.com/?tuin=304a784b#tab=0&category=-1',
        pg = await bs.newPage();
    await pg.goto(url, {
        timeout: 30 * 1000,
        waitUntil: 'networkidle2',
        waitUtil: 'networkidle2',
    });

    const result = await pg.evaluate(() => {
        const $ = window.$;
        const $item = $('.agency-big-banner-ul .agency-big-banner-li');
        let data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $elLink = $el.find('.js-banner-btnqq');
            const dataItem = {
                cid: $elLink.attr('data-id'),
                href: $elLink.prop('href'),
                imgUrl: $elLink.find('img').prop('src'),
                title: $elLink.prop('title'),
            };

            data.push(dataItem);
        });
        return data;
    });
    console.log('result-----------', result);
    await bs.close();
});

module.exports = router;
