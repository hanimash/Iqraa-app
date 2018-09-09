const express = require('express');
const router = express.Router();
const teacherConroller=require('../controllers/teacher')

router.get('/add',teacherConroller.teacherForm);
router.post('/add',teacherConroller.addNewTeacher);

router.get('/all',teacherConroller.getAllTeachers);
router.get('/show/:id',teacherConroller.getTeacherById);

module.exports = router;
