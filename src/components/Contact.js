import { ReactComponent as LiIcon } from "../icons/linkedin.svg"
import { ReactComponent as GhIcon } from "../icons/github.svg"
import { ReactComponent as EnvIcon } from "../icons/envelope.svg"
export const Contact = () => {
  //Extra mail link with icon <a href="mailto:contact@andrewdelamare.dev" className="self-center"> <EnvIcon className="w-7 h-7 self-center"/></a>
  return (
    <div className="grid grid-cols-2 gap-9 mt-64 mb-64 pt-32 pb-32 mx-auto w-4/5 text-xl" id="contact">
      <h2 className="text-4xl pb-5 col-span-2">Contact</h2>
      <p className="font-serif self-center text-justify w-9/10">
        I'm always interested in new projects and opportunities, so if you'd like to work with me or build something cool with my help please get in touch!
      </p>
      <span></span>
      <div className="flex flex-col">
        <h3 className="text-2xl">Send me a message</h3>
        <div className="flex mt-3 justify-between">
          <a className=" flex font-serif text-lg self-center w-fit p-2 border-black border-4 rounded-xl shadow-xl hover:shadow-lg hover:bg-blue-101 hover:text-white hover:scale-95 active:shadow-md active:scale-90 active:bg-blue-103 duration-100 transition-all ease-in-out" href="mailto:contact@andrewdelamare.dev">contact@andrewdelamare.dev</a>
          <a href="https://github.com/andrewdelamare" className="self-center mr-4 scale-110 hover:scale-100 active:scale-90"><GhIcon  className="w-7 h-7 self-center"/></a> 
          <a href="https://www.linkedin.com/in/andrew-de-lamare-5166ba169" className="self-center mr-4 scale-110 hover:scale-100 active:scale-90"><LiIcon className="w-7 h-7 self-center "/></a>
        </div>
        
      </div>
    </div>  
  )
}