import React, { useEffect, useState, useContext, useRef } from "react";
import notesContext from '../Context/Notes/notesContext';
import NotesItem from "./NotesItem";

const Notes = (props) => {
  const context = useContext(notesContext);
  const { notes, showNotes, editNotes } = context;
  const [note, setNotes] = useState({ _eid: "", etitle: "", edescription: "", etag: "" });
  const ref = useRef(null);
  const closeRef = useRef(null);

  // Use to show the notes
  useEffect(() => {
    
    if (localStorage.getItem('token') !== null) {
      showNotes();
    } else {
      <p>No Notes is present</p>
    }

    // eslint-disable-next-line
  }, [])

  // When click the update note button
  const handleUpdateNotes = (e) => {
    editNotes(note._eid, note.etitle, note.edescription, note.etag);
    closeRef.current.click();

    // Show alert message for succesfully delete a note
    props.showAlert("Successfully update the note", "success");
  }

  // when write in title, description and tag field
  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value })
  }

  const updateNotes = (currentNote) => {
    ref.current.click();
    setNotes({ _eid: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag });
  }

  return (
    <>
      {/* Button trigger modal */}
      <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
                <input type="text" className="form-control" id="etitle" name="etitle" minLength={3} required value={note.etitle} placeholder="Write your note title(Title must be at least 3 char long)" onChange={onChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                <textarea className="form-control" id="edescription" name="edescription" minLength={5} required value={note.edescription} rows="5" placeholder="Notes Description (Description must be at least 5 chars long)" onChange={onChange} ></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
                <input type="text" className="form-control" id="etag" name="etag" value={note.etag} placeholder="Write your note tag" onChange={onChange} />
              </div>

            </div>
            <div className="modal-footer">
              <button type="button" ref={closeRef} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button disabled={note.etitle.length < 3 || note.edescription.length < 5} type="button" className="btn btn-primary" onClick={handleUpdateNotes}>Update Note</button>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <h1 className="text-center" style={{fontFamily : "fangsong"}}>Show Your Notes</h1>
        
        {notes.length === 0 ? (
          "No Notes is present"
        ) : (
          notes.map((note) => (
            <NotesItem key={note._id} note={note} updateNotes={updateNotes} showAlert={props.showAlert} />
          ))
        )}

      </div>
    </>
  );
};

export default Notes;
