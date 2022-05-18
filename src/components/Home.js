import { ReactComponent as DownArrowIcon } from "../icons/arrow-down.svg"
import profilePic from "../images/profilePic.jpg"
export const Home = () => {

  return (
    <div className="flex mt-32 mb-32 justify-center mx-auto overflow-visible" id="home">
      <div className="grid grid-cols-2 grid-rows-4 text-bottom overflow-visible px-20 pt-10 md:w-2/3 xs:w-full  ">
        <div className=" text-5xl col-span-1 text-center self-center">Hi, I'm Andrew</div>
        <img src={profilePic} alt="me" className="rounded-full drop-shadow-2xl border-4 m-10 border-zinc-700 w-40 justify-self-center"/>
        <DownArrowIcon className="animate-bounce self-center w-full h-7 col-span-2" />
      </div>
    </div>  
  )
}