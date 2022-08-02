import React from "react";
import { Route, Routes } from 'react-router-dom'

import Anime from "./components/Anime/Anime";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";
import Collection from "./components/Collection/Collection";
import CollectionDetail from "./components/CollectionDetail/CollectionDetail";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/anime" element={<Anime/>} />
          <Route path="/anime/:id" element={<AnimeDetail/>}/>
          <Route path="/collection" element={<Collection/>} />
          <Route path="/collection/:name" element={<CollectionDetail/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
