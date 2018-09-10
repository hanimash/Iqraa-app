const mongoose = require('mongoose'),
      Schema = mongoose.Schema;


const studentSchema =new Schema({
    code: {
      type: String
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    birthdate: {
      type: Date,
      required: true
    },
    placeOfBirth: String,
    gender:String,
    nationality: String,
    parent1: {
      type: String,
      required: true
    },
    parent2: String, 
    street: String,
    hauseNumber: String,
    postcode: String,
    city: String,
    email: {
      type: String,
      required: true
    },
    password: {
      type: String, 
      required: true
    },
    mobile: {
      type: String, 
      required: true
    },
    regDate:{
        type : Date,
        default: new Date()
      },
    regInfo: String,
    regEmployee:String,
    daysPresent:[
      {
        date:{
         type : Date 
        },
        isComing:{
          type: Boolean
        },
        description:{
          type:String
        }
      }
    ],
    documents:[
      {
        date:{
          type : Date 
        },
        file:{
          type: String
        },
        description:{
          type:String
        }
      }
    ],
    regFee:[
      {
        date:{
          type : Date,
          default: Date.now
        },
        amount:{
          type: Number
        },
        description:{
          type:String
        }
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    },
    msgCenter:[
      {
        msgDate :{
          type : Date
        },
        msgTitle:{
          type: String 
        },
        msgBody:{
          type: String
        }
      }
    ],
    token:String,
});


module.exports = mongoose.model('Student', studentSchema);
