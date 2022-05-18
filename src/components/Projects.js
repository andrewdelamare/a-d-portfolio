import { Card } from "./Card"
export const Projects = () => {

  return (
    <div id="projects" className="sm:grid sm:grid-cols-2 sm:gap-9 w-4/5 sm:justify-center mx-auto my-64 pt-32">
      <h1 className="col-span-2 text-4xl">Projects</h1> 
      <div className="flex flex-col w-full">
      <Card pName="Front end fun" pDesc="This project was great, I loved it. " pUrl="https://github.com/andrewdelamare" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="Full stack masterpiece" pDesc="SO SOOOOOOO much work. What can I say, full stack is a ton of work but dang is it fun. I cant get enough of full stack development. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT, Nodejs, REDUX"/>
      <Card pName="Front end experiment" pDesc="This project was great, I loved it. I spent a ton of time working with these technologies and I really grew to love them." pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      </div>
      <div className="flex flex-col">
      <Card pName="Full stack challenge" pDesc="SO SOOOOOOO much work. What can I say, full stack is a ton of work but dang is it fun. I cant get enough of full stack development. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT, Nodejs, REDUX"/>
      <Card pName="Front end mini project" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="Old about me page" pDesc="This project was great, I loved it. I spent a ton of time working with these technologies and I really grew to love them." pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      </div>
    </div>
  )
}