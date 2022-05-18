import {useState } from "react";
import { ReactComponent as Plus } from "../icons/angle-down.svg"
import { ReactComponent as GhIcon } from "../icons/github.svg"
export const Card = ({pName, pUrl, pDesc, pTech}) => {
  const [expanded, setExpanded] = useState(false);
  const [cStyles, setCstyles] = useState("flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-lg transition ease-in-out duration-300");
  const [bStyles, setBstyles] = useState("mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end scale-105 hover:bg-blue-102 hover:scale-100 active:bg-blue-103 active:scale-90")
  const [pStyles, setPstyles] = useState("flex-row pt-8 font-serif text-md hidden")
  const [lStyles, setLstyles] = useState("flex-row pt-8 font-serif text-md hidden")
  //container styles
  const cExpanded = "flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-xl transition ease-in-out duration-700 bg-blue-101 text-white "
  const cShrunk = "flex flex-col border-4 border-slate-800 rounded-lg p-7 my-3 shadow-lg transition ease-in-out duration-700"
  //button styles
  const bExpanded = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-white self-end transition ease-in-out duration-300 rotate-180 scale-105 hover:bg-slate-100 hover:scale-100 active:bg-slate-200 active:scale-90"
  const bShrunk = "mt-3 border-2 border-slate-800 rounded-lg w-8 h-8 bg-blue-101 self-end transition ease-in-out duration-300 scale-105 hover:bg-blue-102 hover:scale-100 active:bg-blue-103 active:scale-90"
  //p styles
  const pExpanded = "flex pt-8 font-serif text-md fill-slate-900 items-center   "
  const pShrunk = "flex pt-8 font-serif text-md hidden fill-slate-50 items-center"
  //l styles
  const lExpanded = "flex pt-8 text-lg fill-slate-900 items-center "
  const lShrunk = "flex pt-8 text-lg hidden fill-slate-100 items-center transition ease-in-out"

  const expandIt = () => {
    const expand = () => {
      setCstyles(cExpanded)
      setBstyles(bExpanded)
      setPstyles(pExpanded)
      setLstyles(lExpanded)
    }
    const contract = () => {
      setCstyles(cShrunk)
      setBstyles(bShrunk)
      setPstyles(pShrunk)
      setLstyles(lShrunk)
    }
    !expanded ? expand() : contract();
    setExpanded(!expanded)
  }
  const goTo = (url) => {return window.open(url,'blank')}

  return (
    <div className={cStyles}>
      <h2 className="font-sans text-2xl ">{pName}</h2> 
      <p className={pExpanded}>{pTech}</p>
      <p className={pStyles}>{pDesc}</p>
      <p className={lStyles}>
        <button alt="link to project repo" href="https://github.com/andrewdelamare" onClick={() => goTo(pUrl)} 
        className="border-2 rounded-full border-black bg-white mr-4 scale-105 hover:bg-slate-100 hover:scale-100 active:bg-slate-200 active:scale-90">
          <GhIcon className="w-7 h-7 m-2 self-center"/>
        </button>
        Check it out on Github
      </p>
      <button className={bStyles} onClick={expandIt}><Plus className="flex w-5 h-5 self-center m-1"/></button> 
    </div>
  )
  
}