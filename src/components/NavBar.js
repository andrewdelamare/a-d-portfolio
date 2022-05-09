import { NavLink } from "react-router-dom"
export const NavBar = () => {
  return (
    <nav className="inline-grid grid-cols-2 mr-4 sticky float-right w-full font-sans">
      <div className="pl-5 pt-3 text-2xl "><p><span className="text-4xl">A</span>ndrew <span className="text-4xl">d</span>e <span className="text-4xl">L</span>amare</p></div>
      <ul className="inline-grid grid-cols-3 text-center pt-5 " >
        <NavLink to="/" >Home</NavLink>
        <NavLink to="/code" >Code</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </ul>
    </nav>
  )
}