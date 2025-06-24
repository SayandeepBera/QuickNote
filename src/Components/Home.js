import React from 'react'
import Notes from './Notes'

const Home = () => {

  return (
    <div className='container mt-5'>
      {/* Add your notes section */}
      <h1 className="text-center">Add Your Notes</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your note title"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Tag</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Write your note tag"/>
      </div>

      {/* Show your notes section */}
      <Notes/>
    </div>
  )
}

export default Home

