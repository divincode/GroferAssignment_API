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
    .get(userController.index)
    .post(userController.new);
router.route('/users/:user_id')
    .get(userController.view)
    .delete(userController.delete);
// Contact routes


var ticketController = require('./controller/ticketController');
// Contact routes
router.route('/tickets')
    .get(ticketController.index);
router.route('/tickets/:user_id')
    .get(ticketController.viewBy_userid)
    .post(ticketController.new)
    .delete(ticketController.deleteBy_userid);
router.route('/tickets/:user_id/:ticket_id')
    .get(ticketController.viewBy_useridandticket_id)
    .put(ticketController.update)
    .delete(ticketController.deleteBy_useridandticket_id);

var eventController = require('./controller/eventController');
// Contact routes
router.route('/events')
    .get(eventController.index)
    .post(eventController.new);
router.route('/events/:event_id/:user_id')
    .post(eventController.addUserToEvent);
router.route('/events/:event_id')    
    .delete(eventController.deleteBy_eventid);
router.route('/tickets/:user_id/:ticket_id')
    .get(ticketController.viewBy_useridandticket_id)
    .put(ticketController.update)
    .delete(ticketController.deleteBy_useridandticket_id);
module.exports = router;
// Export API routes
