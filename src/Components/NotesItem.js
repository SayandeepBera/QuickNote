import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext';

const NotesItem = (props) => {
    const {note, updateNotes} = props;
    const context = useContext(notesContext);
    const {deleteNotes} = context;

    const handleDeleteNotes = ()=>{
      deleteNotes(note._id);

      // Show alert message for succesfully delete a note
      props.showAlert("Successfully delete the note", "success");
    }

  return (
    <div className="col-md-3">
      <div className="card my-3" style={{"width": "18rem"}}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{note.title}</h5>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={()=>{updateNotes(note)}}></i>
          </div>
          
          <p className="card-text">{note.description}</p>
          <i className="fa-solid fa-trash mx-2" onClick={handleDeleteNotes}></i>
          
        </div>
      </div>
    </div>
  )
}

export default NotesItem
