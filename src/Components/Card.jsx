import React from 'react'

const Card = ({movie,addwatch,removewatch,watchlist}) => {

const isContain = (movie) => {
  for(let i =0 ;i<watchlist.length;i++){
    if(watchlist[i].id ===movie.id){
      return true
    }
  }
  return false
}

  return (
    <div className='w-[200px] h-[45vh] bg-cover bg-center rounded-xl hover:cursor-pointer hover:scale-110 duration-300 m-5' style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}}>
        <div className='absolute w-[200px] h-[45vh] bg-black/50 rounded-xl'>
          {isContain(movie)?( <h1 onClick={()=>removewatch(movie)} className='absolute right-2 top-2 rounded-sm'>&#10060;</h1>):(
 <h1 onClick={()=>addwatch(movie)} className='absolute left-2 top-2  rounded-sm'>&#10084;&#65039;</h1>
          )}
         
            <h2 className='text-white font-semibold text-md absolute  bottom-10 w-[200px] text-center '>{movie.title}</h2>
            <p className='text-white text-sm absolute bottom-2 w-[200px] text-center  '>{movie.release_date}</p>
        </div>
    </div>
  )
}

export default Card

// https://api.themoviedb.org/3/movie/popular?api_key=afb2d92e99905efb2f3026d8273a14f2&language=en-US&page=1