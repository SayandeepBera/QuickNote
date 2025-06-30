import React from 'react'
import Notes from './Notes'
import AddNotes from "./AddNotes";

const Home = (props) => {
  return (
    <>
      {/* Add notes section */}
      <AddNotes showAlert={props.showAlert} />

      {/* Show your notes section */}
      <Notes showAlert={props.showAlert} />
    </>
  )
}

export default Home

