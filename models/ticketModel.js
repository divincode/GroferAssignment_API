var mongoose = require('mongoose');
// Setup schema
var ticketSchema = mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    create_date: {
        type: Date,
        default: Date.now
    },
    used:
    {
        type:Boolean,
        default :false
    }

});
// Export Contact model
var ticket = module.exports = mongoose.model('ticket', ticketSchema);
module.exports.get = function (callback, limit) {
    ticket.find(callback).limit(limit);
}