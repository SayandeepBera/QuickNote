import { useState } from "react";
import NotesContext from "../Notes/notesContext";

const NotesState = (props) => {
  const allNotes = [
    {
      _id: "685049213d1ac7969d194fdb",
      user: "68504044e9044c2befc0f992",
      title: "Are you happy? (Updated version3)",
      description: "I am always happy (Updated version3)",
      tag: "Happy!",
      date: "2025-06-16T16:41:05.113Z",
      __v: 0,
    },
    {
      _id: "685ac48473c4bb26e6167cff",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:30:12.821Z",
      __v: 0,
    },
    {
      _id: "685ac4b473c4bb26e6167d01",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:31:00.071Z",
      __v: 0,
    },
    {
      _id: "685ac525008acb92cbb0909d",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:32:53.601Z",
      __v: 0,
    },
    {
      _id: "685049213d1ac7969d194fdb",
      user: "68504044e9044c2befc0f992",
      title: "Are you happy? (Updated version3)",
      description: "I am always happy (Updated version3)",
      tag: "Happy!",
      date: "2025-06-16T16:41:05.113Z",
      __v: 0,
    },
    {
      _id: "685ac48473c4bb26e6167cff",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:30:12.821Z",
      __v: 0,
    },
    {
      _id: "685ac4b473c4bb26e6167d01",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:31:00.071Z",
      __v: 0,
    },
    {
      _id: "685ac525008acb92cbb0909d",
      user: "68504044e9044c2befc0f992",
      title: "I am Don",
      description: "Can you describe why did you call don?",
      tag: "Boss!",
      date: "2025-06-24T15:32:53.601Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(allNotes);

  return (
    // value={{state : state, update : update}}
    <NotesContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;
