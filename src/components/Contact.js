import { ReactComponent as LiIcon } from "../icons/linkedin.svg"
import { ReactComponent as GhIcon } from "../icons/github.svg"
export const Contact = () => {
  //Extra mail link with icon <a href="mailto:contact@andrewdelamare.dev" className="self-center"> <EnvIcon className="w-7 h-7 self-center"/></a>
  return (
    <div className=" sm:grid sm:grid-cols-2 sm:gap-9 mt-64 mb-32 sm:mb-64 pt-32 pb-32 mx-auto w-4/5 text-xl" id="contact">
      <h2 className="text-2xl sm:text-4xl pb-5 col-span-2">Contact</h2>
      <p className="font-serif text-base sm:text-xl self-center text-justify w-9/10">
        I'm always interested in new projects and opportunities, so if you'd like to work with me or build something cool with my help please get in touch!
      </p>
      <span></span>
      <div className="flex flex-col">
        <h3 className=" text-lg sm:text-2xl mt-4">Send me a message</h3>
        <div className="flex flex-wrap mt-3">
          <a className=" flex font-serif text-base sm:text-lg self-center w-fit p-2 border-black border-4 rounded-xl shadow-xl hover:shadow-lg hover:bg-blue-101 hover:text-white hover:scale-95 active:shadow-md active:scale-90 active:bg-blue-103 duration-100 transition-all ease-in-out" href="mailto:contact@andrewdelamare.dev">contact@andrewdelamare.dev</a>
          <div className="flex sm:" >
            <a href="https://github.com/andrewdelamare" className="self-center mx-4 mt-3 scale-110 hover:scale-100 active:scale-90"><GhIcon  className="w-7 h-7 self-center"/></a>
            <a href="https://www.linkedin.com/in/andrew-de-lamare-5166ba169" className="self-center mr-4 mt-3 scale-110 hover:scale-100 active:scale-90"><LiIcon className="w-7 h-7 self-center "/></a>
          </div> 
          
        </div>
        
      </div>
    </div>  
  )
}