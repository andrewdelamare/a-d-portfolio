import { Card } from "./Card"
export const Projects = () => {

  return (
    <div id="projects" className="grid grid-cols-2 gap-9 w-4/5 justify-center mx-auto my-32">
      <h1 className="col-span-2 text-4xl">Projects</h1> 
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
      <Card pName="A super cool project I made" pDesc="This project was great, I loved it. " pUrl="This is a fake url" pTech="HTML, CSS, JS, TS, REACT"/>
    </div>
  )
}