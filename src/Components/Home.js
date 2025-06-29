import React from 'react'
import Notes from './Notes'

const Home = (props) => {
  const {showAlert} = props;

  return (
    <>
      {/* Show your notes section */}
      <Notes showAlert={showAlert} />
    </>
  )
}

export default Home

