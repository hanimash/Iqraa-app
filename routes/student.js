const express = require('express');
const router = express.Router();
const studentConroller=require('../controllers/student')
const errorHandler= require('../handlers/errorHandlers');

router.get('/list',studentConroller.getAllStudents,studentConroller.studentsList);
router.get('/add',studentConroller.studentForm);
router.post('/add',errorHandler.catchErrors(studentConroller.addNewStudent));

// router.get('/all',errorHandler.catchErrors(studentConroller.getAllStudents));
router.get('/show/:code',errorHandler.catchErrors(studentConroller.getStudentByCode));

module.exports = router;
