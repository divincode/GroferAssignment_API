Event = require('../models/eventModel');
Ticket = require('../models/ticketModel');
// Handle index actions
exports.index = function (req, res) {
    Event.get(function (err, events) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "All events retrieved successfully",
            data: events
        });
    });
};

exports.new = function (req, res) {
    console.log(req.body.prize);
    console.log(req.body.date);

    var event = new Event();
    event.date=req.body.date;
    event.prize=req.body.prize;
// save the contact and check for errors
    event.save(function (err) {
        // if (err)
        //     res.json(err);
res.json({
            message: 'New event created!',
            data: event
        });
    });
};

exports.addUserToEvent = function (req, res) {
    console.log(req.params.event_id);
    console.log(req.params.user_id);
    var i=0;
    var unused_ticket= false;
    var ticket_id="";
    Ticket.find({"user_id":req.params.user_id},function (err, tickets) {
        if (err) {
            res.send(err);
        }
        var len=tickets.length;
        console.log(tickets[0].used);
        for(;i<len;i++)
        {
            if(tickets[i].used==false)
            {
                unused_ticket= true;
                break;
            }
        }
        console.log(i);
        console.log(unused_ticket);
        Event.findById(req.params.event_id, function (err, event) {
        if (err)
        {
            res.send(err);
        }
        console.log(event.users); 
        var user_participated= event.users.includes(req.params.user_id);
        console.log(user_participated); 
        
        

        if(unused_ticket && (!user_participated))
        {
            tickets[i].used=true;
            console.log(tickets[i].used);
            tickets[i].save(function (err) {
            if (err)
            {
                res.json(err);
            }
            });

            event.users.push(req.params.user_id);
            event.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'User added',
                data: event
            });
        });
        }
        else
        {
            res.json(
                {
                    message:'does not has ticket or user participated in the event'
                }
            )
        }

    });
    });
};


exports.deleteBy_eventid = function (req, res) {
    Event.remove({
        _id:req.params.event_id
    }, function (err, event) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            data:req.params.event_id,
            message: "the event has been deleted"
        });
    });
};