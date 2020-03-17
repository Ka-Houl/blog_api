const router = require('koa-router')(),
      indexController = require('../controllers/Index'),
      loginCheck = require('../middlewares/loginCheck');

router.get('/get_courses', loginCheck, indexController.getCourses);
router.get('/get_recom_courses', loginCheck, indexController.getRecomCourses);
router.get('/get_sliders', loginCheck, indexController.getSliders);
router.get('/get_collections', loginCheck, indexController.getCollections);
router.get('/get_teachers', loginCheck, indexController.getTeachers);
router.get('/get_students', loginCheck, indexController.getStudents);

router.post('/change_course_field', loginCheck, indexController.changeCourseField);
router.post('/change_status', loginCheck, indexController.changeDataStatus);
router.post('/select_star_teacher', loginCheck, indexController.changeTeacherStar);

module.exports = router;