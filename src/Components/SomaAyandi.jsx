import React from 'react'
import { Link } from 'react-router-dom'

const SomaAyandi = () => {
       return (
         <div className="flex justify-center">
           <Link to="/">
             <span
               className="shadow bg-slate-900 hover:bg-slate-800 focus:shadow-outline focus:outline-none text-white text-lg font-bold px-10 py-2 rounded-xl"
               type="button"
             >
               Soma ayandi makuru ngaha
             </span>
           </Link>
         </div>
       );
}

export default SomaAyandi