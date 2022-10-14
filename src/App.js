import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

function App() {
  return (
    <div className="bg-slate-100 flex flex-col justify-center overflow-clip">
      <NavBar />
      <div className=" mx-0 h-full flow-root w-auto sm:mx-8 ">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <footer className="flex flex-col w-4/5 justify-center mx-auto font-serif my-3">
        <span className="border-b border-slate-900 border-2"></span>
        <p className="self-center mt-1">
          Made in 2022 by Andrew de Lamare. Thanks for visiting!
        </p>
      </footer>
    </div>
  );
}

export default App;
