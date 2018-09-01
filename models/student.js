const mongoose = require('mongoose');
// User Schema
const studentSchema = mongoose.Schema({
  Parents: [
  {firstname: {
    type: String,
    required: true
  }}, 
  {lastname: {
    type: String,
    required: true
  }},
  {location:{
    street: {
      type: String,
      required: true
    },
    number: {
      type: Number,
      required: true
    },
    postcode: {
      type: Number,
      required: true
    },
    city: {
      type: String,
      required: true
    } 
  }},
  {email: {
    type: String,
    required: true, 
    unique: true
  }},
  {mobile: {
    type: Number, 
    required: true
  }},
  {password: {
    type: String,
    required: false
  }},
  {msgCenter:[
    {
      msgDate :{
        type : Date,
        default: Date.now 
      },
      msgTitle:{
        type: String 
      },
      msgBody:{
        type: String
      }
    }
  ]},
  {student:[
    {firstname: {
      type: String,
      required: true
    }},
    {lastname: {
      type: String,
      required: true
    }},
    {Birthday: {
      type: String,
      required: true
    }},
    {placeOfBirth: {
        type: String,
        required: true
      }},
    {reg :[
      {regDate:{
        type : Date 
      }},
      {reginfo:{
        type:String
      }},
      {regEmployer:{
        type:String
      }}
    ]},
    {nationality: {
      type: String,
      required: true
    }},
    {time:[
      {date:{
        type : Date 
      }},
      {isComing:{
        type: Boolean
      }},
      {description:{
        type:String
      }}
    ]},
    {documents:[
      {date:{
        type : Date 
      }},
      {file:{
        type: String
      }},
      {description:{
        type:String
      }}
    ]},
    {regFee:[
      {date:{
        type : Date 
      }},
      {amount:{
        type: Number
      }},
      {description:{
        type:String
      }}
    ]}
  ]}
  ]
});

studentSchema.post('save', (err, doc, next) => {
  console.log(err)
  if (err.code === 11000) {
    next({"err": "Account with this Email already exists."});
  } else {
    next(err);
  }
});

const student = module.exports = mongoose.model('Student', studentSchema);
