const Student = require('../models/student');

module.exports={
    newStudentForm: (req,res,next)=>{
        res.render('newStudentForm');
    },
    addNewStudent:async (req,res,next)=>{
        const student = await (new Student(req.body)).save();
        res.status(201).json({message: 'success save new student in db',
                    newStudent: student
                });
    },
    getAllStudents:async (req,res,next)=>{
        const studnts = await Student.find();
        res.status(201).json({
                    message: 'success',
                    resultNumber: studnts.length,
                    studnts: studnts
                });
    },
    getStudentById:async (req,res,next)=>{
        const student = await Student.findById(req.params.id);
        res.status(201).json({
                        message: 'success',
                        student: student
                    });
    }
}