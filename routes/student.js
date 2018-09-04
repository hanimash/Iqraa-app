const express = require('express');
const router = express.Router();
const studentConroller=require('../controllers/student')

router.get('/add',studentConroller.newStudentForm);
router.post('/add',studentConroller.addNewStudent);

router.get('/all',studentConroller.getAllStudents);
router.get('/show/:id',studentConroller.getStudentById);

module.exports = router;
