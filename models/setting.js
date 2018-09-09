const mongoose = require('mongoose'),
      Schema = mongoose.Schema,

const settingSchema =new Schema({
    students: Number,
    Teacher: Number,
});


module.exports = mongoose.model('Setting', settingSchema);
