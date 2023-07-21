import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import PageRecipe from "./pages/PageRecipe";

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:id' element={<PageRecipe/>}/>
      </Routes>
    </div>
  );
}

export default App;
