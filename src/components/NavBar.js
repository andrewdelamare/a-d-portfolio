import { Link } from "react-router-dom"
export const NavBar = () => {
  return (
    <div> 
      <nav class="inline-grid grid-cols-2 mr-4  sticky float-right w-full font-sans">
      <div class="pl-5 pt-3 text-2xl "><p><span class="text-4xl">A</span>ndrew <span class="text-4xl">d</span>e <span class="text-4xl">L</span>amare</p></div>
        <ul class="inline-grid grid-cols-3 text-center pt-5 " >
          <Link to="/" >Home</Link>
          <Link to="/code" >Code</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </div>
  )
}