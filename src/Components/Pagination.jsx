import React, { useState } from 'react'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";

const Pagination = ({pageno,nextpage,prevpage}) => {
    
  return (
    <>
        <div className='w-[90%] mx-auto p-5 bg-zinc-800 text-yellow-500 font-bold flex justify-center items-center gap-10 text-xl m-5 rounded-xl'>
            <div><FaArrowLeft onClick={prevpage} /></div>
            <div>{pageno}</div>
            <div><FaArrowRight onClick={nextpage} /></div>
        </div>
    </>
  )
}

export default Pagination