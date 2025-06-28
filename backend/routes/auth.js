const express = require('express');
const router = express.Router();
const User=require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchUser');

const JWT_SECRET = 'Harryisgoodboy';

// ROUTE 1 : Creating a user using POST "/api/auth/createuser". Doesn't require login
router.post('/createuser', [
    // name must be at least 3 char long
    body('name','Name must be at least 3 char long').isLength({ min: 3 }),

    // username must be an email
    body('email','Enter the valid email').isEmail(),

    // password must be at least 5 chars long
    body('password','Password must be at least 5 chars long').isLength({ min: 5 })

], async(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try{
        // Check if user with this email already exists
        let existingUser = await User.findOne({ email: req.body.email });
        let success = false;

        if (existingUser) {
            return res.status(400).json({ success, error: "A user with this email already exists." });
        }

        // Store your password (hash+salt) formate in DB
        const salt = await bcrypt.genSalt(10);
        const securePass = await bcrypt.hash(req.body.password, salt);

        // Create new user
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass
        })
        
        // JWTs enable secure authentication and authorization by providing a way to verify user identity and grant access to specific resources. 
        const data={
            user:{
                id : user.id
            }
        }

        // Send token after store the information into the database with JWT_SECRET
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({success : true, authToken});

    }catch(errors){
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }

})

// ROUTE 2 : Creating a user using POST "/api/auth/login".
router.post('/login', [
    // username must be an email
    body('email','Enter the valid email').isEmail(),

    // password must be at least 5 chars long
    body('password','password must be at least 5 chars long').exists()

], async(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email,password} = req.body;

    try{
        // Check if user with this email already exists or not
        let existingUser = await User.findOne({ email });
        let success = false;

        if (!existingUser) {
            return res.status(400).json({ success, error: "Please try to login with correct credential" });
        }

        // Check if user with this password already exists or not
        let existingPassword = await bcrypt.compare(password, existingUser.password);
        if (!existingPassword) {
            return res.status(400).json({ success, error: "Please try to login with correct credential" });
        }

        // JWTs enable secure authentication and authorization by providing a way to verify user identity and grant access to specific resources. 
        const data={
            user:{
                id : existingUser.id
            }
        }

        // If user exist then send the token
        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({success : true, authToken});
        
    }catch(errors){
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3 : Get a user details using POST "/api/auth/getuser".
router.post('/getuser', fetchuser, async(req, res)=>{
    try {
        const userId=req.user.id;
        let existUserDetails = await User.findById(userId).select("-password");
        res.send(existUserDetails);
    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})

module.exports = router