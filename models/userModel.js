var mongoose = require('mongoose');
// Setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export user model
var user = module.exports = mongoose.model('user', userSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}