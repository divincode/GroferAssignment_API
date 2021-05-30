Ticket = require('../models/ticketModel');
// Handle index actions
exports.index = function (req, res) {
    Ticket.get(function (err, tickets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "All tickets retrieved successfully",
            data: tickets
        });
    });
};

exports.viewBy_userid = function (req, res) {
    
    console.log(req.params.user_id);
    Ticket.find({"user_id":req.params.user_id},function (err, tickets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "All tickets retrieved successfully",
            data: tickets
        });
    });
};
// Handle create ticket actions
exports.new = function (req, res) {
    console.log(req.params.user_id);
    var ticket = new Ticket();
    ticket.user_id=req.params.user_id;
// save the ticket and check for errors
    ticket.save(function (err) {
         if (err)
         {
                res.json(err);
         }
            
res.json({
            message: 'New ticket created!',
            data: ticket
        });
    });
};

exports.deleteBy_userid = function (req, res) {
    var User_id=req.params.user_id;
    Ticket.remove({
        user_id: req.params.user_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            data:User_id,
            message: "Ticket of the above person is deleted"
        });
    });
};

exports.viewBy_useridandticket_id = function (req, res) {
    console.log(req.params.user_id);
    console.log(req.params.ticket_id);
    Ticket.find({"user_id":req.params.user_id,"_id":req.params.ticket_id},function (err, tickets) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "All tickets retrieved successfully",
            data: tickets
        });
    });
};




exports.deleteBy_useridandticket_id = function (req, res) {
    var User_id=req.params.user_id;
    Ticket.remove({
        user_id: req.params.user_id,
        _id:req.params.ticket_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            data:User_id,
            message: "Ticket of the above person is deleted"
        });
    });
};