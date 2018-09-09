const Student = require('../models/student');

module.exports={
    studentForm: (req,res,next)=>{
        res.render('studentForm');
    },
    addNewStudent:async (req,res,next)=>{
        const student = await (new Student(req.body)).save();
        res.status(201).json({message: 'success save new student in DB',
                    newStudent: student
                });
    },
    getAllStudents:async (req,res,next)=>{
        const studnts = await Student.find().exec();
        if(!students.length) return next();
        res.status(201).json({
                    message: 'success',
                    resultNumber: students.length,
                    students: students
                });
    },
    getStudentById:async (req,res,next)=>{
        try{
            const student = await Student.findById(req.params.id);
            if(!student) return next();
                res.status(201).json({
                            message: 'Success',
                            student: student
                        });
        }catch(error){
            return next(error);
        }
    }
}