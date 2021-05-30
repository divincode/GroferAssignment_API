var mongoose = require('mongoose');
User = require('./userModel');
// Setup schema
var eventSchema = mongoose.Schema({
    users: [],
    date: {
        type: Date,
        required :true,
        min: '1987-09-28',
        max: '2022-05-23'
    },
    prize:
    {
        type:String,
        required:true
    },
    winner:
    {
        type:String,
        default:"yet to be released"
    }

});
// Export Event model
var event = module.exports = mongoose.model('event', eventSchema);
module.exports.get = function (callback, limit) {
    event.find(callback).limit(limit);
}

//Similarly to user it also contains _id