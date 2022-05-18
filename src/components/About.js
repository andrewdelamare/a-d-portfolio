import { Map } from "./Map"
export const About = () => {
  
  return (
    <div className="grid grid-cols-2 gap-9 w-4/5 justify-center mx-auto mt-64 mb-64 pt-32" id="about">
      <h2 className=" text-2xl sm:text-4xl sm:pb-5 col-span-2">About me</h2>
      <div className="flex flex-col col-span-2 md:col-span-1" >
        <div className="font-serif sm:text-xl self-center">
          <p className="text-justify w-9/10">
          I'm a software developer located in Jyväskylä, Finland. 
          I'm a self taught developer with a background in Scottish and English law. 
          I started programing in 2021 after moving from the San Francisco bay area to Jyväskylä.
          </p>
          <p className="text-justify w-9/10 mt-4">
          I like collaborating, being part of a team, and making things happen. 
          I have experience with front end technologies and frameworks including React and Redux,
          as well as experience with some back end tech, and I'm very interested in modern full stack development.
          I'm especially interested in open source, 
          so if you have a project you'd like some help with please send me an <a href="mailto:contact@andrewdelamare.dev" className="text-blue-102 hover:underline hover:text-blue-103 transition-all ease-in-out">email</a> with details and a link to your remote repository!
          </p>
        </div>
      </div>
      <Map id="map" />  
    </div>
    
  )
}