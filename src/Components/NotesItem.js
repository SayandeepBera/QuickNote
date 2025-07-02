import React, { useContext } from 'react'
import notesContext from '../Context/Notes/notesContext';
import { Link } from 'react-router-dom';

const NotesItem = (props) => {
  const { note, updateNotes } = props;
  const context = useContext(notesContext);
  const { deleteNotes } = context;

  // Handle delete notes
  const handleDeleteNotes = () => {
    deleteNotes(note._id);

    // Show alert message for succesfully delete a note
    props.showAlert("Your note has been removed.", "success");
  }

  return (
    <div className="col-md-4">
      <div className="card my-3" style={{width : "25rem"}}>
        <div className="card-body" style={{ height: "320px" }}>
          <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : "97%"}}>
            {note.tag}
            <span className="visually-hidden">unread messages</span>
          </span>
          <div className="d-flex justify-content-between">
            <h5 className="card-title" style={{ fontFamily: "fangsong", fontSize: "22px", fontWeight: "600" }}>{note.title ? `${note.title.slice(0, 25)}` : ""}</h5>
            <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNotes(note) }}></i>
          </div>

          <p className="card-text" style={{ height: "216px" }}><i>{note.description ? `${note.description.slice(0, 420)}...` : ""}</i></p>
          <i className="fa-solid fa-trash mx-2" onClick={handleDeleteNotes}></i>
          <Link style={{ marginLeft: "7.3rem", textDecoration: "none" }} to={`/readmore/${note._id}`} >Read more</Link>

        </div>
      </div>
    </div>
  )
}

export default NotesItem
