import React from 'react'

const Banner = () => {
  return (
    <div className='md:h-[70vh] h-[40vh]  bg-cover bg-center relative' style={{backgroundImage:'url(https://i.ytimg.com/vi/PYXOOpLyu0k/maxresdefault.jpg)'}}>
        <div className=' md:h-[70vh] h-[40vh] absolute  bg-black/70 w-full'>
            <h1 className='absolute top-1/2 text-white text-3xl left-1/2 -translate-x-1/2 -translate-y-1/2'>Demon Slayer</h1>
        </div>
    </div>
  )
}

export default Banner