const Teacher = require('../models/teacher');

module.exports={
    teacherForm: (req,res,next)=>{
        res.render('teacherForm');
    },
    addNewTeacher:async (req,res,next)=>{
        try{
            const teacher = await (new Teacher(req.body)).save();
            res.status(201).json({message: 'success save new Teacher in db',
                        newTeacher: teacher
                    });
        }catch(err){
            console.log(err);
            
            next(err);
        }
    },
    getAllTeachers:async (req,res,next)=>{
        const teacher = await Teacher.find().exec();
        if(!teacher.length) return next();
        res.status(201).json({
                    message: 'success',
                    resultNumber: teacher.length,
                    teacher: teacher
                });
    },
    getTeacherById:async (req,res,next)=>{
        try{
            const teacher = await Teacher.findById(req.params.id);
            if(!teacher) return next();
                res.status(201).json({
                            message: 'Success',
                            teacher: teacher
                        });
        }catch(error){
            return next(error);
        }
    }
}