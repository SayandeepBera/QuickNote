import React, { useContext, useEffect } from 'react'
import notesContext from '../Context/Notes/notesContext';

const About = () => {
  const a = useContext(notesContext);
    useEffect(()=>{
      
      a.update();
      // eslint-disable-next-line

    }, [])

  return (
    <div>
      <h1>This is {a.state.name} about page and age {a.state.age}</h1>
    </div>
  )
}

export default About