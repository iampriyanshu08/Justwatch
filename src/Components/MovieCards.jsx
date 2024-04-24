import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import Pagination from "./Pagination";

const MovieCards = ({addwatch,removewatch,watchlist}) => {
    const [movies, setmovies] = useState([])
    const [pageno, setpageno] = useState(1)

    const nextpage = ()=>{
     pageno<20 && setpageno(pageno+1)
    }
    const prevpage = ()=>{
      pageno>1 && setpageno(pageno-1)
    }
    useEffect(() => {
     try {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=afb2d92e99905efb2f3026d8273a14f2&language=en-US&page=${pageno}`).then((res)=>{
            setmovies(res.data.results);
            console.log(res.data.results)
        })
     } catch (error) {
        console.log(error)
     }
    
      
     
    }, [pageno])
    
  return (
    <>
      <div className="p-5">
        <h1 className="flex justify-center font-bold text-3xl items-center m-5 ">
          Trending Movies
        </h1>
      </div>
      <div className=" flex justify-center flex-wrap ">
       {movies.map((movie)=>{
        return <Card movie={movie} key={movie.id} addwatch={addwatch} removewatch={removewatch} watchlist={watchlist} />
       })}
      </div>

      <Pagination pageno={pageno} nextpage={nextpage} prevpage={prevpage}/>
    </>
  );
};

export default MovieCards;
