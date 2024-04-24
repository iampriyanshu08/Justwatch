import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Watchlist from "./Components/Watchlist";

const App = () => {
  const [watchlist, setwatchlist] = useState([]);
  const addwatch = (movieobj) => {
    let newwatchlist = [...watchlist, movieobj];
    localStorage.setItem("moviesApp", JSON.stringify(newwatchlist));
    setwatchlist(newwatchlist);
    console.log(newwatchlist);
  };
  const removewatch = (movieobj) => {
    const filterwatch = watchlist.filter((movie) => movie.id != movieobj.id);
    setwatchlist(filterwatch);
    localStorage.setItem("moviesApp", JSON.stringify(filterwatch));
    console.log(filterwatch);
  };

  useEffect(() => {
    let data = localStorage.getItem("moviesApp");
    if (!data) {
      return;
    }
    setwatchlist(JSON.parse(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Header watchlist={watchlist} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                addwatch={addwatch}
                removewatch={removewatch}
                watchlist={watchlist}
              />
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                removewatch={removewatch}
                setwatchlist={setwatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
