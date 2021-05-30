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
// save the event and check for errors
    event.save(function (err) {
         if (err)
         {
             res.json(err);
         }    
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

exports.getWinner = function (req, res) {
    EventId= req.params.event_id;
    console.log(EventId);
    Event.findById(req.params.event_id, function (err, event) {
        if (err)
            res.send(err);

    console.log(event);
    console.log(event.winner);

    if(event.users.length==0)
    {
        res.json(
            {
                message:'no user has participated'
            }
        )
    }
    else if(!(event.winner=="yet to be released"))
    {
       // event
        res.json({
                message: 'event winner was selected here he is',
                data: event.winner
        });
    }
    else
    {
        
        userbase_size=event.users.length;
        id=Math.floor(Math.random() * userbase_size);
        event.winner=event.users[id];
        event.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'event winner is selected',
                data: event
            });
        });
    }

    });

};

exports.getWinner7days = function (req, res) {
    console.log(Event.collections);
    Event.get(function (err, events) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        console.log(events);
        events.sort(function(a,b){
    return b.date -  a.date;
    });
        console.log(events);
        var winner_list= [];
        var i=0;
        var no_of_winners= events.length > 7 ? 7 : events.length;
        for(i=0;i<no_of_winners;i++)
        {
            winner_list.push({"winner_id":events[i].winner , "event_id":events[i]._id , "prize":events[i].prize, "date":events[i].date});
        }
        
        res.json({
            status: "success",
            message: "All winners from the past seven events retrieved successfully",
            data: winner_list
        });
    });

};