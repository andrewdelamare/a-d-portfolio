import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import { NavBar } from './components/NavBar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {


  return (
    <Router>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ABOUT' element={<About />} />
        <Route path='/code' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>


    </Router>  
  );
}

export default App;
