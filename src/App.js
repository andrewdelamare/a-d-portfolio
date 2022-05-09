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
    <div className="h-full flow-root w-full">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/code' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
    </Router>  
  );
}

export default App;
