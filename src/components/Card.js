import {useState } from "react";
import { ReactComponent as Plus } from "../icons/Navigation/plus.svg"
import { ReactComponent as Minus } from "../icons/Navigation/minus.svg"
export const Card = ({pName, pUrl, pDesc, pTech}) => {
  const [expanded, setExpanded] = useState(false);
  const [cStyles, setCstyles] = useState("flex flex-col border-4 border-slate-800 rounded-lg p-7 shadow-lg transition ease-in-out duration-500");
  const [bStyles, setBstyles] = useState("mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end")
  const [pStyles, setPstyles] = useState("flex-row pt-8 font-serif text-md hidden")
  //container styles
  const cExpanded = "flex flex-col border-4 border-slate-800 rounded-lg p-7 shadow-xl transition ease-in-out duration-500 bg-blue-101 text-slate-100"
  const cShrunk = "flex flex-col border-4 border-slate-800 rounded-lg p-7 shadow-lg transition ease-in-out duration-500"
  //button styles
  const bExpanded = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 justify-right bg-slate-100 self-end"
  const bShrunk = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end"
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
      <h2 className="font-sans text-xl ">{pName}</h2> 
      <p className={pExpanded}>{pTech}</p>
      <p className={pStyles}>{pDesc}</p>
      <p className={pStyles}>{pUrl}</p>
      <button className={bStyles} onClick={expandIt}>{!expanded? <Plus /> : <Minus />}</button> 
    </div>
  )
  
}