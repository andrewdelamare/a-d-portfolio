import { NavBar } from './components/NavBar';
import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

function App() {


  return (
  <div className='bg-slate-200 flex flex-col justify-items-center justify-center'>
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
