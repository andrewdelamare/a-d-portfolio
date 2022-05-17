import {useState } from "react";
import { ReactComponent as Plus } from "../icons/Navigation/plus.svg"
import { ReactComponent as Minus } from "../icons/Navigation/minus.svg"
export const Card = ({pName, pUrl, pDesc, pTech}) => {
  const [expanded, setExpanded] = useState(false);
  const [cStyles, setCstyles] = useState("flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-lg transition ease-in-out duration-300");
  const [bStyles, setBstyles] = useState("mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end scale-105 hover:bg-blue-102 hover:scale-100 active:bg-blue-103 active:scale-90")
  const [pStyles, setPstyles] = useState("flex-row pt-8 font-serif text-md hidden")
  //container styles
  const cExpanded = "flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-xl transition ease-in-out duration-300 bg-blue-101 text-white "
  const cShrunk = "flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-lg transition ease-in-out duration-300"
  //button styles
  const bExpanded = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-white self-end transition ease-in-out duration-150 scale-105 hover:bg-slate-100 hover:scale-100 active:bg-slate-200 active:scale-90 "
  const bShrunk = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end transition ease-in-out scale-105 hover:bg-blue-102 hover:scale-100 active:bg-blue-103 active:scale-90"
  //p styles
  const pExpanded = "flex-row pt-8 font-serif text-md"
  const pShrunk = "flex-row pt-8 font-serif text-md hidden"

  const expandIt = () => {
    const expand = () => {
      setCstyles(cExpanded)
      setBstyles(bExpanded)
      setPstyles(pExpanded)
    }
    const contract = () => {
      setCstyles(cShrunk)
      setBstyles(bShrunk)
      setPstyles(pShrunk)
    }
    !expanded ? expand() : contract();
    setExpanded(!expanded)
  }
  return (
    <div className={cStyles}>
      <h2 className="font-sans text-2xl ">{pName}</h2> 
      <p className={pExpanded}>{pTech}</p>
      <p className={pStyles}>{pDesc}</p>
      <p className={pStyles}><a className="" href={pUrl}>{pUrl}</a></p>
      <button className={bStyles} onClick={expandIt}>{!expanded? <Plus /> : <Minus />}</button> 
    </div>
  )
  
}