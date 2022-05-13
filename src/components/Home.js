import { ReactComponent as DownArrowIcon } from "../icons/Navigation/arrow down.svg"
import profilePic from "../images/profilePic.jpg"
export const Home = () => {

  return (
    <div className="flex mt-64 mb-96 justify-center mx-auto " id="#">
      <div className="grid gap-2 grid-cols-2 grid-rows-4 text-bottom  px-20 pt-10 md:w-2/3 xs:w-full  ">
        <div className=" text-5xl col-span-1 text-center self-center">Hi, I'm Andrew</div>
        <img src={profilePic} alt="me" className="rounded-full drop-shadow-2xl border-4 border-zinc-700 w-40 justify-self-center"/>
        <DownArrowIcon className="animate-bounce self-center w-full col-span-2" />
      </div>
    </div>  
  )
}