const mongoose = require('mongoose'),
      Schema = mongoose.Schema,

const adminSchema =new Schema({
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
    email : {
        type: String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    log :[
        {
            action: String,
            date: Date
        }
    ],
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
          },
          msgType:{
              type: String
          },
          msgTo:{

          }
        }
      ]
});

adminSchema.post('save', (err, doc, next) => {
  console.log(err)
  if (err.code === 11000) {
    next({"err": "Account with this Email already exists."});
  } else {
    next(err);
  }
});

module.exports = mongoose.model('Admin', adminSchema);
