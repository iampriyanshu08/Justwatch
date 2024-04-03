import React from 'react'

const Card = ({movie}) => {
  return (
    <div className='w-[200px] h-[45vh] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-5' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}>
        <div className='absolute w-[200px] h-[45vh] bg-black/40 rounded-xl'>
            <h2 className='text-white font-semibold text-md absolute  bottom-10 w-[200px] text-center '>{movie.title}</h2>
            <p className='text-white text-sm absolute bottom-2 w-[200px] text-center  '>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default Card

// https://api.themoviedb.org/3/movie/popular?api_key=afb2d92e99905efb2f3026d8273a14f2&language=en-US&page=1