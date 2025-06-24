import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NotesState from './Context/Notes/notesState';

function App() {
  return (
    <div>
      <NotesState>
        <Router>
          <Navbar/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={ <Home/> }></Route>
              <Route exact path="/about" element={ <About/> }></Route>
            </Routes>
          </div>
        </Router>
      </NotesState>
    </div>
    
  );
}

export default App;
