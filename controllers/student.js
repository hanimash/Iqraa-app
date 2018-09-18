const Student = require('../models/student');
const Config = require('../models/config');
module.exports={
    studentsList:(req,res,next)=>{
        res.render('studentsList',{students:req.students});
    },
    studentForm:async (req,res,next)=>{
        const dataConfig=await Config.find();
        const newStudentCode='STU-'+((dataConfig[0].studentLastNr*1)+1);
        res.render('studentForm',{newStudentCode});
    },
    addNewStudent:async (req,res,next)=>{
        const student = await (new Student(req.body)).save();

        req.flash('success', `Successfully add ${student.firstName+' '+student.lastName}.`);
        res.redirect(`/student/show/${student.code}`);
    },
    getAllStudents:async (req,res,next)=>{
        const students = await Student.find().select(['code','firstName','lastName','parent1']);
        if(!students.length) return next();
        req.students=students;
        next();
    },
    getStudentByCode:async (req,res,next)=>{
            const student = await Student.findOne({code:req.params.code});
            if(!student){
                return next(new Error('wrong student code!!!'));
            }            
            res.render('student',{student})
    }
}