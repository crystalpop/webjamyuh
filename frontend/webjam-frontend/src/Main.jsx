import { useState } from 'react'
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom"
import './App.css'
import App from './App.js'
import Game from './Game.js'
import { ThemeProvider } from 'react-bootstrap'

function Main() {
 

  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/game' element={<Game />} />
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Main;
