import React from "react";
import Banner from "./Banner";
import MovieCards from "./MovieCards";




const Home = ({addwatch,removewatch,watchlist}) => {
  return (
    <>
      <Banner />
      <MovieCards addwatch={addwatch} removewatch={removewatch} watchlist={watchlist}/>
      
     
    </>
  );
};

export default Home;
