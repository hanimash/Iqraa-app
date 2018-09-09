const mongoose = require('mongoose'),
      Schema = mongoose.Schema,


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
    birthday: {
      type: Date,
      required: true
    },
    placeOfBirth: {
        type: String
      },
    regDate:{
        type : Date,
        default: new Date()
      },
    regInfo:{
        type:String
      },
    regEmployer:{
        type:String
    },
    nationality: {
      type: String,
    },
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
    parent2Name: {
      type: String,
    }, 
    street: {
        type: String,
      },
    hauseNumber: {
        type: Number,
      },
    postcode: {
        type: Number,
      },
    city: {
        type: String,
    },
    email: {
      type: String,
      unique: true
    },
    mobile: {
      type: String, 
      required: true
    },
    password: {
      type: String,
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
