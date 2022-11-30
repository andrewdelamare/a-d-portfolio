import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as PersonIcon } from "../icons/user.svg";
import { ReactComponent as CodeIcon } from "../icons/briefcase.svg";
import { ReactComponent as ContactIcon } from "../icons/comment-alt.svg";
export const NavBar = () => {

  const scrollToEl = (elId) => {
    const element = document.getElementById(elId);
    element.scrollIntoView({behavior: "smooth"});
  }

  return (
    <nav className="inline-flex justify-between sm:mr-4 sticky top-0 float-right w-full font-sans bg-slate-100 z-50">
      <div className="pl-5 pt-3 mt-4 text-xl sm:text-2xl">
        <p>
          <span className="sm:text-4xl">A</span>ndrew de{" "}
          <span className="sm:text-4xl">L</span>amare
        </p>
      </div>
      <div className="flex flex-row justify-between sm:mr-5 ">
        <a
          href="#root"
          className="inline-flex  border-0 pt-5 pb-2 px-3 mt-3 sm:px-6 focus:outline-none"
          onClick={(event) => {event.preventDefault(); scrollToEl("root");}}
        >
          {" "}
          <HomeIcon className="w-5 h-5" />{" "}
        </a>
        <a
          href="#about"
          className="inline-flex  border-0 pt-5 px-3 mt-3 sm:px-6 focus:outline-none  "
          onClick={(event) => {event.preventDefault(); scrollToEl("about");}}
        >
          <PersonIcon className="w-5 h-5" />
        </a>
        <a
          href="#projects"
          className="inline-flex  border-0 pt-5 px-3 mt-3 sm:px-6 focus:outline-none  "
          onClick={(event) => {event.preventDefault(); scrollToEl("projects");}}

        >
          <CodeIcon className="w-5 h-5" />
        </a>
        <a
          href="#contact"
          className="inline-flex border-0 pt-5 px-3 mt-3 sm:px-6 focus:outline-none  "
          onClick={(event) => {event.preventDefault(); scrollToEl("contact");}}

        >
          <ContactIcon className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
};
