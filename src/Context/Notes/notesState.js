import { useState } from "react";
import NotesContext from "../Notes/notesContext";

const NotesState = (props) => {
  const localhost = "http://localhost:5000";

  const allNotes = [];
  const [notes, setNotes] = useState(allNotes);

  // Function 1 : Show the notes
  const showNotes = async ()=>{
    // When token is not present then not required to API call
    if(!localStorage.getItem('token')){
      return;
    }

    // API Call to fetch all notes
    const response = await fetch(`${localhost}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      
    });

    const existNotes = await response.json();
    setNotes(existNotes);
  }

  // Function 2 : Add the note
  const addNotes = async (title,description,tag)=>{
    // API Call to add the notes
    const response = await fetch(`${localhost}/api/notes/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
      
    });

    const addNote = await response.json();
    setNotes(notes.concat(addNote));
  }

  // Function 3 : Delete the notes
  const deleteNotes = async (id)=>{
    // API Call to delete the notes
    console.log("Delete notes with id : "+ id);

    const response = await fetch(`${localhost}/api/notes/deletenotes/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      
    });

    const delNote = await response.json();
    console.log(delNote);

    // Fiter the notes which is not want to delete
    const filterNotes = notes.filter((note)=>{
      return note._id !== id;
    })

    setNotes(filterNotes);
  }

  // Function 4 : Edit the notes
  const editNotes = async (id, title, description, tag)=>{
    // API call to edit the notes
    const response = await fetch(`${localhost}/api/notes/updatenotes/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({ title, description, tag }),
      
    });

    const json = await response.json();
    console.log(json);
    

    // To edit logic for notes

    // Converts a JavaScript Object Notation (JSON) string into an object.
    const newNotes = JSON.parse(JSON.stringify(notes));

    for(let index = 0; index<newNotes.length; index++){
      const element = newNotes[index];
      
      if(element._id === id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }

    setNotes(newNotes);

  }

  // To clear notes from show notes section
  const clearNotes = ()=>{
    setNotes([]);
  }

  return (
    // value={{state : state, update : update}}
    <NotesContext.Provider value={{ notes, addNotes, deleteNotes, editNotes, showNotes, clearNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
