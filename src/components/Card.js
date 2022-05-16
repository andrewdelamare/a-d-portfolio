import {useState } from "react";
import { ReactComponent as Plus } from "../icons/Navigation/plus.svg"
import { ReactComponent as Minus } from "../icons/Navigation/minus.svg"
export const Card = ({pName, pUrl, pDesc, pTech}) => {
  const [expanded, setExpanded] = useState(false);

  const expandIt = () => {
    setExpanded(!expanded);  
  }

  if(expanded === false){
    return (
      <div className=" flex flex-col border-4 border-slate-800 rounded-lg p-7 shadow-xl transition ease-in-out scale-100">
        <h2 className="font-sans text-xl ">{pName}</h2> 
        <p className="flex-row pt-8 font-serif text-md">{pTech}</p>
        <button className="border-2 border-slate-800 rounded-lg w-8 h-8 bg-green-200" onClick={expandIt}><Plus className="" /></button> 
      </div>
    )
  }else if(expanded === true){
    return (
      <div className=" flex flex-col border-4 border-slate-800 rounded-lg p-7 shadow-xl transition ease-in-out bg-green-200 scale-105 ">
        <h2 className="font-sans text-xl">{pName}</h2>
        <p className="flex-row pt-8 font-serif text-md">{pTech}</p>
        <p className="flex-row pt-8 font-serif text-md">{pDesc}</p>
        <p className="flex-row pt-8 font-serif text-md">{pUrl}</p>
        <button className="border-2 border-slate-800 rounded-lg w-8 h-8 justify-right bg-slate-200" onClick={expandIt}><Minus className="" /></button> 
      </div>
    )
  }
}