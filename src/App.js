import { NavBar } from './components/NavBar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Projects } from './components/Projects';

function App() {

  return (
  <div className='bg-gradient-to-b from-indigo-500 to-slate-200 flex flex-col justify-items-center justify-center'>
    <NavBar />
    <div className=" h-full flow-root w-auto mx-8 ">
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
    
  </div>
   
  );
}

export default App;
