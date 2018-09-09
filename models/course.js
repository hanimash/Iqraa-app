const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const courseSchema =new Schema({
    name: {
        type: String,
        required: true
    },
    color: String,
    logo: String,
    targets: [
        {
            target: String,
            done: Boolean
        }
    ],
    notes:String,
    teacher:{
        type: ObjectId,
        ref: 'Teacher'
    },
    students: [
        {
            type: ObjectId,
            ref: 'Student'
        }
    ],
    lessons:[
        {
            title: String,
            description: String,
            goals:String,
            sources: String,
            doc: String,
            date: Date,
            note: String
        }
    ],
    homeworks:[
        {
            date: Date,
            title: String,
            des: String,
            receivedDate: Date,
            doc: String,
            docDesc: String
        }
    ]
});

module.exports = mongoose.model('Course', courseSchema);