let router = require('express').Router();
// Set default API response

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RES- Lucky Draw Gaming Service crafted with love!'
    });
});

var userController = require('./controller/userController');
router.route('/users')
    .get(userController.index) // route for getting all users .
    .post(userController.new); // route for creating a new user ,the request with body with name attribute .
router.route('/users/:user_id')
    .get(userController.view)  // route for getting the particular user , the request with param uid .
    .delete(userController.delete); //route for deleting the particular user , the request with param uid .
// user routes


var ticketController = require('./controller/ticketController');
// ticket routes
router.route('/tickets')
    .get(ticketController.index); // route for getting all tickets in the database .
router.route('/tickets/:user_id')
    .get(ticketController.viewBy_userid) // route for geting all the tickets for a particular user id . the request with param user id .
    .post(ticketController.new) // route for geting a new ticket for a particular user id . the request with param user id .
    .delete(ticketController.deleteBy_userid); // route for deleting all the tickets for a particular user id . the request with param user id .
router.route('/tickets/:user_id/:ticket_id')
    .get(ticketController.viewBy_useridandticket_id) // route for geting ticket for a particular user id and ticket id  . the request with param user id and ticket if .
    .delete(ticketController.deleteBy_useridandticket_id); // route for deleting for a particular user id and ticket id  . the request with param user id and ticket if .

var eventController = require('./controller/eventController');
// Event routes
router.route('/events')
    .get(eventController.index) // route for getting all events
    .post(eventController.new); // route for creating a new event with date and prize as attributes in the request of the body..
router.route('/events/:event_id/:user_id')
    .post(eventController.addUserToEvent); // route for adding a user to event  with param user id and event id
router.route('/events/:event_id')    
    .delete(eventController.deleteBy_eventid); // route of deleting a event with param as event id
router.route('/events/:event_id/winner')
    .get(eventController.getWinner) // route for getting winner for a particular with param as event id
router.route('/events/winner')
    .get(eventController.getWinner7days) // route for getting winner for the last seven events
module.exports = router;
// Export API routes
