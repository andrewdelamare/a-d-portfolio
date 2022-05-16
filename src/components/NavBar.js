import { ReactComponent as HomeIcon } from "../icons/Essentials/home.svg"
import { ReactComponent as CodeIcon } from "../icons/Navigation/divide.svg"
import { ReactComponent as ContactIcon } from "../icons/Essentials/message.svg"
export const NavBar = () => {
/*
  .nav-container{
    display: inline-flex;
    justify-content: space-between;
    margin-left: 25px;
    width: 100%;
    
}
.navigation-items{
    padding-top: 58px;
    padding-right: 50px;
}
.navigation-item{
    display: inline;
    Font-Family: 'Work Sans', Sans-Serif;
    Font-Size: 35px;
    padding-left: 30px;
    float: left;
}
*/
  return (
    <nav className="inline-flex justify-between mr-4 sticky top-0 float-right w-full font-sans bg-slate-100 z-50">
      <div className="pl-5 pt-3 text-2xl"><p><span className="text-4xl">A</span>ndrew de <span className="text-4xl">L</span>amare</p></div>
      <div className="flex flex-row justify-between mr-5 " >
        <a href="#" className="inline-flex  border-0 pt-5 px-6 focus:outline-none"> <HomeIcon /> </a>
        <a href="#projects" className="inline-flex  border-0 pt-5 px-6 focus:outline-none  "><CodeIcon /></a>
        <a href="#contact" className="inline-flex border-0 pt-5 px-6 focus:outline-none  "><ContactIcon /></a>
      </div>
    </nav>
  )
}