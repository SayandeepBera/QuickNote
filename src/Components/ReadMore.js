import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import notesContext from '../Context/Notes/notesContext';

const ReadMore = () => {
    const { id } = useParams();
    const { notes, showNotes } = useContext(notesContext);
    const [currentNote, setCurrentNote] = useState({ title: "", description: "", tag: "" });

    useEffect(() => {
        if (notes.length) {
            const note = notes.find(n => n._id === id);
            if (note) {
                setCurrentNote({ title: note.title, description: note.description, tag: note.tag });
            }
        } else {
            // Optional fallback: fetch notes only if context is empty
            showNotes();
        }

        // eslint-disable-next-line
    }, []);

    return (
        <div className="container col-md-10" style={{marginTop : "150px"}}>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center fs-3" style={{ fontFamily: "fangsome" }}>{currentNote.title}</h5>
                    <p className="card-text">{currentNote.description}</p>
                    <p className="card-text"><i>Tag : {currentNote.tag}</i></p>
                </div>
            </div>
        </div>
    )
}

export default ReadMore
