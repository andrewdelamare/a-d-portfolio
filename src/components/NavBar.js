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
    <nav className="inline-grid grid-cols-2 mr-4 sticky top-0 float-right w-full font-sans bg-slate-500">
      <div className="pl-5 pt-3 text-2xl"><p><span className="text-4xl">A</span>ndrew de <span className="text-4xl">L</span>amare</p></div>
      <div className="flex flex-row justify-between mr-5 " >
        <a href="#" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Home</a>
        <a href="#projects" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Code</a>
        <a href="#contact" className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Contact</a>
      </div>
    </nav>
  )
}