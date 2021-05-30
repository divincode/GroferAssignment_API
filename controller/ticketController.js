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
// Handle create contact actions
exports.new = function (req, res) {
    console.log(req.params.user_id);
    var ticket = new Ticket();
    ticket.user_id=req.params.user_id;
// save the contact and check for errors
    ticket.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New ticket created!',
            data: ticket
        });
    });
};
// Handle view contact info
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
// Handle update contact info

exports.update = function (req, res) {
Contact.findById(req.params.contact_id, function (err, contact) {
        if (err)
            res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender;
        contact.email = req.body.email;
        contact.phone = req.body.phone;
// save the contact and check for errors
        contact.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact


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