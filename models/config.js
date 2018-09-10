const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const configSchema =new Schema({
    studentLastNr: Number,
    TeacherLastNr: Number,
});


module.exports = mongoose.model('Config', configSchema);
