import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes, Route, Link
} from "react-router-dom";
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ABOUT' element={<About />} />
        <Route path='/PROJECTS' element={<Projects />} />
        <Route path='/CONTACT' element={<Contact />} />
      </Routes>
      <div>
        This will be the footer to all pages
      </div>
    </Router>
    
  );
}

export default App;
