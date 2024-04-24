import React from "react";

import movie from "../assets/movie.png";
import { Link } from "react-router-dom";

const Header = ({watchlist}) => {
  return (
    <>
      <div className="flex items-center justify-between gap-10 cursor-pointer w-full bg-zinc-900 p-5 mx-auto text-yellow-500 fixed top-0 z-50">
        <img className="w-[50px] bg-yellow-500 rounded-md" src={movie} alt="" />
     <div className="flex items-center gap-5">
     <Link to='/'> <h2  className='text-xl font-bold' href="/">Home</h2></Link>
       <Link to='/watchlist'> <h2  className='text-xl font-bold ' href="/watchlist">My Watchlist {watchlist.length>=1 && (<span className=" flex items-center justify-center w-5 h-5 absolute top-3 right-5 text-sm text-black bg-yellow-500 rounded-full">{watchlist.length}</span>)} </h2></Link>
     </div>
      </div>
    </>
  );
};

export default Header;
