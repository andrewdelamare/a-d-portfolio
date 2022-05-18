import { ReactComponent as DownArrowIcon } from "../icons/arrow-down.svg"
import profilePic from "../images/profilePic.jpg"
export const Home = () => {

  return (
    <div className="flex mt-32 mb-32 justify-center mx-auto overflow-visible" id="home">
      <div className="grid grid-rows-3 grid-cols-1 xs:grid-cols-2 text-bottom overflow-visible xs:px-20 pt-10 sm:w-2/3 w-full  ">
        <div className=" text-4xl xs:text-5xl sm:col-span-1 text-center self-center">Hi, I'm Andrew</div>
        <div className="xs:hidden"></div><img src={profilePic} alt="me" className="col-span-1 rounded-full border-4 m-10 border-zinc-700 w-40 justify-self-center"/>
        <DownArrowIcon className="animate-bounce self-center w-full h-7 col-span-2" />
      </div>
    </div>  
  )
}