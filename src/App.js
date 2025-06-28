import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NotesState from './Context/Notes/notesState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (
    <div>
      <NotesState>
        <Router>
          <Navbar/>
          <Alert message = {"This is the alert message"} />
          <div className="container">
            <Routes>
              <Route exact path="/" element={ <Home/> }></Route>
              <Route exact path="/about" element={ <About/> }></Route>
              <Route exact path="/login" element={ <Login/> }></Route>
              <Route exact path="/signup" element={ <Signup/> }></Route>
            </Routes>
          </div>
        </Router>
      </NotesState>
    </div>
    
  );
}

export default App;
