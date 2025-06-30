import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext';
import { Link } from 'react-router-dom';

const NotesItem = (props) => {
  const { note, updateNotes } = props;
  const context = useContext(notesContext);
  const { deleteNotes } = context;

  const handleDeleteNotes = () => {
    deleteNotes(note._id);

    // Show alert message for succesfully delete a note
    props.showAlert("Successfully delete the note", "success");
  }

  return (
    <div className="col-md-4">
      <div className="card my-3">
        <div className="card-body" style={{ height: "320px" }}>
          <div className="d-flex justify-content-between">
            <h5 className="card-title" style={{ fontFamily: "fangsong", fontSize: "22px", fontWeight: "600" }}>{note.title ? `${note.title.slice(0, 25)}` : ""}</h5>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNotes(note) }}></i>
          </div>

          <p className="card-text" style={{ height: "216px" }}><i>{note.description ? `${note.description.slice(0, 420)}...` : ""}</i></p>
          <i className="fa-solid fa-trash mx-2" onClick={handleDeleteNotes}></i>
          <Link style={{ marginLeft: "7.3rem", textDecoration: "none" }}>Read more</Link>

        </div>
      </div>
    </div>
  )
}

export default NotesItem
