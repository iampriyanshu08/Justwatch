import React, { useEffect, useState } from "react";
import { FaArrowUp,FaArrowDown } from "react-icons/fa";
import {genreids} from '../Utility/Genre'

const Watchlist = ({ watchlist, removewatch,setwatchlist }) => {
  const [usersearch, setusersearch] = useState("");
  const [genreList, setGenreList] = useState(['All Genres'])
  const [currGenre, setcurrGenre] = useState('All Genres')
  const handleSearch = (e) => {
    setusersearch(e.target.value);
    console.log(usersearch);
  };

const handleFilter = (genre)=>{
  setcurrGenre(genre)
}

  const sortIncrease = ()=>{
     const sortInc = watchlist.sort((a,b)=>{
      return a.vote_average-b.vote_average
    })
    setwatchlist([...sortInc])
  }
  const sortDecrease = ()=>{
    const sortDec = watchlist.sort((a,b)=>{
      return b.vote_average-a.vote_average
    })
    setwatchlist([...sortDec])
  }
  useEffect(() => {
    let temp = watchlist.map((movi)=>{
     return  genreids[movi.genre_ids[0]]
      
  })
  temp = new Set(temp)
    setGenreList(['All Genres',...temp])
    console.log(temp)
  

  }, [watchlist])
  
  return (
    <>
      <div className="flex justify-center mb-5  mt-24 flex-wrap gap-5 cursor-pointer">
        {genreList.map((genre,id)=>{
         return  <div onClick={()=>handleFilter(genre)} key={id} className={currGenre===genre ? "bg-zinc-800 w-36 h-12 flex justify-center items-center text-yellow-500 font-bold" : " bg-gray-400 w-36 h-12 flex justify-center items-center text-yellow-500 font-bold" }>
         {genre}
        </div>
})}


        
        
      </div>
      <div className="flex justify-center ">
        <input
          onChange={handleSearch}
          className="px-5 w-64 p-2 bg-gray-200 text-black rounded-md outline-none"
          type="search"
          placeholder="Search for movies"
          value={usersearch}
        />
      </div>
      <div className="border border-gray-300 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th className="w-[40%]">Name</th>
             <th className="flex items-center justify-center gap-4 ">
              <div className="cursor-pointer"  onClick={sortIncrease}><FaArrowUp /></div>
               <div>Rating</div>
               <div className="cursor-pointer" onClick={sortDecrease}><FaArrowDown /></div>
               </th>
              <th>Popularity</th>
              <th>Genres</th>
            </tr>
          </thead>
          <tbody>
            {watchlist.filter((movi)=>{
              if(currGenre=='All Genres'){
                return true;
              }
              else{
                return genreids[movi.genre_ids[0]]==currGenre
              }
            })
              .filter((movi) =>
                movi.title.toLowerCase().includes(usersearch.toLowerCase())
              )
              .map((movi) => (
                <tr className="border-b-2 " key={movi.id}>
                  <td className="flex items-center py-4 px-6 gap-10  ">
                    <img
                      className="h-28 w-36 object-contain"
                      src={`https://image.tmdb.org/t/p/original/${movi.backdrop_path}`}
                    />
                    <h1 className="">{movi.title}</h1>
                  </td>
                  <td>
                    <h1>{movi.vote_average}⭐</h1>
                  </td>
                  <td>
                    <h1>{movi.popularity}❤️</h1>
                  </td>
                  <td>
                    <h1>{genreids[movi.genre_ids[0]]}</h1>
                  </td>
                  <td>
                    <button
                      onClick={() => removewatch(movi)}
                      className="bg-red-700 text-white px-3 py-1 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
