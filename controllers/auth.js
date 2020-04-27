const db = require('../models')
const bcrypt = require('bcrypt')

// register
const register = (req, res) => {
    // check if you've got the required information
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            message: "Name, email, and password are required."
        })
    }

    // make sure user does not already exist
    db.User.findOne({ email: req.body.email }, (err, foundUser) => {
        // error checking for a problem with the server or DB
        if (err) return res.status(500).json({
            message: 'Something went wrong. Please try again.'
        })

        // if a user is found, return a response
        if (foundUser) return res.status(400).json({
            message: "A user with that email address already exists!"
        })

        // Generate a safe password
        bcrypt.genSalt(10, (err, salt) => {
            if (err) return res.status(500).json({
                message: 'Something went wrong when generating salt. This is a debugging message.'
            })

            // Hash the user's password using the salt that was generated
            bcrypt.hash(req.body.password, salt, (err, hash) => {
                if (err) return res.status(500).json({
                    message: 'Something went wrong when ussing bcrypt to hash. This is a debugging message.'
                })

                const newUser = {
                    name: req.body.name,
                    email: req.body.email,
                    password: hash,
                    dateJoined: Date(Date.now()) 
                }

                db.User.create(newUser, (err, savedUser) => {
                    if (err) return res.status(500).json({ status: 500, message: err })
                    return res.status(200).json({ status: 200, message: "User registered!" })
                })
            })
        })
    })
}

// POST - login user
const login = (req, res) => {
    // console.log(req.body);
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ status: 400, message: 'Please enter your email and password' });
    }

    db.User.findOne({email: req.body.email}, (err, foundUser) => {
        if (err) return res.status(500).json({ status: 500, message: `{err}` });

        if (!foundUser) {
            return res.status(400).json({ status: 400, message: 'User was not found.'});
        }

        bcrypt.compare(req.body.password, foundUser.password, (err, isMatch) => {
            if (err) return res.status(500).json({ status: 500, message: `{err}` });

            if (isMatch) {
                req.session.currentUser = { id: foundUser._id };
                return res.status(200).json({ status: 200, message: 'Success', data: foundUser._id });
            } else {
                return res.status(400).json({ status: 400, message: 'Email or password is incorrect' });
            }
        });
    });
};

// POST Logout - Destroy Session
const logout = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized' });
    req.session.destroy((err) => {
        if (err) return res.status(500).json({ status: 500, message: `{err}` });
        res.sendStatus(200);
    });
};

// GET Verify Current User
const verify = (req, res) => {
    if (!req.session.currentUser) return res.status(401).json({ status: 401, message: 'Unauthorized' });
    res.status(200).json({
        status: 200,
        message: `Current User verified. User ID: ${req.session.currentUser.id}`
    });
};

module.exports = {
    register,
    login,
    verify,
    logout
}