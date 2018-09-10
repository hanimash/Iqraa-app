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
    regDate:{
        type : Date,
        default: new Date()
      },
    regInfo: String,
    regEmployer:String,
    nationality: String,
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
    parent1Name: {
      type: String,
      required: true
    },
    parent2Name: String, 
    street: String,
    hauseNumber: String,
    postcode: String,
    city: String,
    email: {
      type: String,
      unique: true
    },
    mobile: {
      type: String, 
      required: true
    },
    password: String,
    token:String,
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
    isActive: {
      type: Boolean,
      default: true
    }
});

studentSchema.post('save', (err, doc, next) => {
  console.log(err)
  if (err.code === 11000) {
    next({"err": "Account with this Email already exists."});
  } else {
    next(err);
  }
});

module.exports = mongoose.model('Student', studentSchema);
