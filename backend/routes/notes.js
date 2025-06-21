const express = require('express');
const router = express.Router();
const Notes=require('../models/Notes');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchUser');

// ROUTE 1 : Fetch the all notes of a user using GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res)=>{
    try {
        // Find all exist notes of a user through user id
        const existingNotes = await Notes.find({user : req.user.id});

        res.json(existingNotes);

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
    
})

// ROUTE 2 : Import/Add the notes using POST "/api/notes/addnotes". Login required
router.post('/addnotes', fetchuser, [
    // Title must be at least 3 char long
    body('title','Title must be at least 3 char long').isLength({ min: 3 }),

    // Description must be at least 5 chars long
    body('description','Description must be at least 5 chars long').isLength({ min: 5 })

], async(req, res)=>{
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {

        // Other way to add new notes as create the user
        /*const notes = await Notes.create({
            title: req.body.title,
            description: req.body.description,
            tag: req.body.tag,
            user : req.user.id
        })
        res.json(notes);*/

        const {title, description, tag} = req.body;

        const notes = new Notes({
            title, description, tag, user : req.user.id
        })

        // Save the notes in the database
        const savedNotes = await notes.save();
        
    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 3 : Update the notes using PUT "/api/notes/updatenotes". Login required
router.put('/updatenotes/:id', fetchuser, async (req, res)=>{
    
    // Fetch or selete the title, description, tag from req.body 
    const {title, description, tag} = req.body;

    try {
        const newNotes = {};

        // Update the title if exist 
        if(title){
            newNotes.title = title;
        }

        // Update the description if exist
        if(description){
            newNotes.description = description;
        }

        // Update the tag if exist
        if(tag){
            newNotes.tag = tag;
        }

        // Check notes is exist or not in given id
        const notes = await Notes.findById(req.params.id);
        if(!notes){
            return res.status(404).send("Not Found");
        }

        // Allow updation only if user own this notes  
        if(notes.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        // Find the notes to be updated and update it
        const updateNotes = await Notes.findByIdAndUpdate(req.params.id, {$set : newNotes}, {new : true});
        res.json({updateNotes});

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
    
    
})

// ROUTE 4 : Update the notes using DELETE "/api/notes/deletenotes". Login required
router.delete('/deletenotes/:id', fetchuser, async (req, res)=>{

    try {
        // Check notes is exist or not in given id
        const notes = await Notes.findById(req.params.id);
        if(!notes){
            return res.status(404).send("Not Found");
        }

        // Allow deletion only if user own this notes 
        if(notes.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        // Find the notes to be deleted and delete it
        const deleteNotes = await Notes.findByIdAndDelete(req.params.id, {$delete : notes}, {new : true});
        res.send({"Result" : "Successfuly delete the note", "Note" : notes});

    } catch (errors) {
        console.error(errors.message);
        res.status(500).send("Internal Server Error");
    }
    
})

module.exports = router