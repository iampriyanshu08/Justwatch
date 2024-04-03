import React from "react";
import Header from "./Components/Header";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./Components/Home";
import Watchlist from "./Components/Watchlist";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
