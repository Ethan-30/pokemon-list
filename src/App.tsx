import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {PokemonList} from "./pages/pokemon-list";

function App() {

  return (
    <Routes>
      <Route path={'/'} element={<PokemonList />} />
      <Route path={'*'} element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
