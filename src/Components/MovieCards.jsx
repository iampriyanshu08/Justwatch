import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const MovieCards = () => {
    const [movies, setmovies] = useState([])
    useEffect(() => {
     try {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=afb2d92e99905efb2f3026d8273a14f2&language=en-US&page=2`).then((res)=>{
            setmovies(res.data.results);
            console.log(res.data.results)
        })
     } catch (error) {
        console.log(error)
     }
    
      
     
    }, [])
    
  return (
    <>
      <div className="p-5">
        <h1 className="flex justify-center font-bold text-3xl items-center m-5 ">
          Trending Movies
        </h1>
      </div>
      <div className=" flex justify-center flex-wrap ">
       {movies.map((movie)=>{
        return <Card movie={movie} key={movie.id}/>
       })}
      </div>
    </>
  );
};

export default MovieCards;
