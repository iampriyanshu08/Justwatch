import React from "react";

import movie from "../assets/movie.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="flex items-center justify-left gap-10 cursor-pointer w-full bg-zinc-900 p-5 mx-auto text-yellow-500">
        <img className="w-[50px] bg-yellow-500 rounded-md" src={movie} alt="" />
       <Link to='/'> <h2  className='text-xl font-bold' href="/">Home</h2></Link>
       <Link to='/watchlist'> <h2  className='text-xl font-bold' href="/watchlist">My Watchlist</h2></Link>
      </div>
    </>
  );
};

export default Header;
