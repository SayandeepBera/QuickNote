import React, { useState, useContext } from 'react'
import notesContext from '../Context/Notes/notesContext';

const AddNotes = () => {
    const context = useContext(notesContext);
    const { addNotes } = context;
    const [note, setNotes] = useState({title : "", description : "", tag : ""});

    // When click the add note button
    const handleClick = (e)=>{
        e.preventDefault();
        addNotes(note.title, note.description, note.tag);

        // Reset to empty form
        setNotes({title : "", description : "", tag : ""});
    }

    // when write in title, description and tag field
    const onChange = (e)=>{
        setNotes({...note, [e.target.name] : e.target.value})
    }

  return (
    <div className='container mt-5'>
      {/* Add your notes section */}
      <h1 className="text-center">Add Your Notes</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name="title" value={note.title} minLength={3} required placeholder="Write your note title(Title must be at least 3 char long)" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="description" value={note.description} minLength={5} required name="description" rows="6" placeholder="Notes Description (Description must be at least 5 chars long)" onChange={onChange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
        <input type="text" className="form-control" id="tag" name="tag" value={note.tag} placeholder="Write your note tag" onChange={onChange} />
      </div>
      <button disabled={note.title.length < 3 || note.description.length < 5} type="button" className="btn btn-primary" onClick={handleClick}>Add Notes</button>
    </div>
  )
}

export default AddNotes
