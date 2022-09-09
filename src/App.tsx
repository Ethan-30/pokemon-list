import React from 'react';
import './App.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {PokemonList} from "./pages/pokemon-list";
import InjectAxiosInterceptors from "./config/InjectAxiosInterceptor";
import {QueryClient, QueryClientProvider} from 'react-query';

function App() {

  return (
    <QueryClientProvider client={new QueryClient()}>
      <BrowserRouter>
        <InjectAxiosInterceptors/>
        <PokemonList/>
        <Routes>
          <Route path={'/'} element={<PokemonList/>}/>
          <Route path={'*'} element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
