import { Map } from "./Map"
export const About = () => {
  
  return (
    <div className="flex flex-col mt-32 mb-64 mx-auto w-4/5" id="#about">
      <h2 className="text-4xl pb-5">About me</h2>
      <div className="font-serif text-xl self-center">
        <p className="text-justify w-9/10">
        I'm a software developer located in Jyväskylä, Finland. 
        I like collaborating, being part of a team, and making things happen. 
        I have experience with front end technologies and frameworks.
        I also have experience with some back end tech, and I'm very interested in modern full stack development
        </p>
      </div>
      <Map id="map" />
    </div>  
  )
}