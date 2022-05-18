import { ReactComponent as DownArrowIcon } from "../icons/arrow-down.svg"
import profilePic from "../images/profilePic.jpg"
export const Home = () => {

  return (
    <div className="flex mt-24 sm:mt-32 mb-40 sm:mb-64 justify-center mx-auto overflow-visible" id="home">
      <div className="grid grid-cols-2 text-bottom overflow-visible xs:px-20 pt-10 sm:w-2/3 w-full  ">
        <div className=" invisible sm:visible sm:text-5xl sm:col-span-1 text-center self-center">Hi, I'm Andrew</div>
        <img src={profilePic} alt="me" className="col-span-2 sm:col-span-1 rounded-full border-4 m-10 border-zinc-700 w-60 sm:w-40 justify-self-center"/>
        <div className="visible sm:invisible text-3xl col-span-2 text-center self-center mb-12">Hi, I'm Andrew</div>
        <DownArrowIcon className="animate-bounce self-center w-full h-7 col-span-2" />
      </div>
    </div>  
  )
}