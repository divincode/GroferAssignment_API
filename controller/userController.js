User = require('../models/userModel');
// Handle index actions
exports.index = function (req, res) {
    User.get(function (err, users) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "users retrieved successfully",
            data: users
        });
    });
};
// Handle create user actions
exports.new = function (req, res) {
    console.log("hello");
    var user = new User();
    user.name = req.body.name ;
// save the user and check for errors
    user.save(function (err) {
         if (err)
         {
            res.json(err);
         }
            
res.json({
            message: 'New user created!',
            data: user
        });
    });
};
// Handle view a specific user
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err)
            res.send(err);
        res.json({
            message: 'user details loading..',
            data: user
        });
    });
};

// Handle delete user
exports.delete = function (req, res) {
    User.remove({
        _id: req.params.user_id
    }, function (err, contact) {
        if (err)
            res.send(err);
res.json({
            status: "success",
            message: 'user deleted'
        });
    });
};

