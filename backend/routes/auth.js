const express = require('express');
const router = express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');

// Creating a user using POST "/api/auth/createuser". Doesn't require auth
router.post('/createuser', [
    // name must be at least 3 char long
    body('name','Enter the valid name').isLength({ min: 3 }),

    // username must be an email
    body('email','Enter the valid email').isEmail(),

    // password must be at least 5 chars long
    body('password','password must be at least 5 chars long').isLength({ min: 5 })

], async(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        // Check if user with this email already exists
        let existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ error: "A user with this email already exists." });
        }

        // Create new user
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })
        
        res.json(user);

    }catch{
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = router