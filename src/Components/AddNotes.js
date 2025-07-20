import React, { useState, useContext } from 'react'
import notesContext from '../Context/Notes/notesContext';
import { useNavigate } from 'react-router-dom';

const AddNotes = (props) => {
    const context = useContext(notesContext);
    const { addNotes } = context;
    const [note, setNotes] = useState({title : "", description : "", tag : ""});
    const navigate = useNavigate(null);

    // When click the add note button
    const handleAddNote = (e)=>{
        e.preventDefault();
      
        if(localStorage.getItem('token') !== null){
          addNotes(note.title, note.description, note.tag);

          // Reset to empty form
          setNotes({title : "", description : "", tag : ""});

          // Show alert message for succesfully add a note
          props.showAlert("Note added successfully!", "success");
        }else{
          navigate('/login');
        }
    }

    // when write in title, description and tag field
    const onChange = (e)=>{
        setNotes({...note, [e.target.name] : e.target.value})
    }

  return (
    <div className='container rounded-3' id="addNote" style={{marginTop : "150px", padding : "15px 45px"}}>
      {/* Add your notes section */}
      <h1 className="text-center" style={{fontFamily : "fangsong"}}>Add Your Notes</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Title (Title must be at least 3 char long)</label>
        <input type="text" className="form-control" id="title" style={{opacity : "0.8"}} name="title" value={note.title} minLength={3} required placeholder="Write your note title" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Description (Description must be at least 5 chars long)</label>
        <textarea className="form-control" id="description" style={{opacity : "0.8"}} value={note.description} minLength={5} required name="description" rows="6" placeholder="Describe your note" onChange={onChange}></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label" style={{fontSize : "19px", fontFamily : "auto", fontWeight : "600"}}>Tag</label>
        <input type="text" className="form-control" id="tag" style={{opacity : "0.8"}} name="tag" value={note.tag} placeholder="Write your note tag" required onChange={onChange} />
      </div>
      <button disabled={note.title.length < 3 || note.description.length < 5} type="button" className="btn btn-primary" onClick={handleAddNote}>Add Notes</button>
    </div>
  )
}

export default AddNotes
