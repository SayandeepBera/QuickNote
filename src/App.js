import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NotesState from './Context/Notes/notesState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { useState } from 'react';
import ReadMore from './Components/ReadMore';

function App() {
  const [alert,setAlert] = useState(null);

  // Use for alert message
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <div>
      <NotesState>
        <Router>
          <Navbar/>
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={ <Home showAlert={showAlert} /> }></Route>
              <Route exact path="/about" element={ <About/> }></Route>
              <Route exact path="/login" element={ <Login showAlert={showAlert} /> }></Route>
              <Route exact path="/signup" element={ <Signup showAlert={showAlert} /> }></Route>
              <Route path="/readmore/:id" element={<ReadMore showAlert={showAlert} />} />
            </Routes>
          </div>
        </Router>
      </NotesState>
    </div>
    
  );
}

export default App;
