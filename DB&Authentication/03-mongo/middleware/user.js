const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    User.findOne({
        username: req.headers.username,
        password: req.headers.password
    })
    .then(function(value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "Admin doesnt exist"
            })
        }
    })
}

module.exports = userMiddleware;