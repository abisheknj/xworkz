

import React from 'react';

import { Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { Softwares } from './pages/Softwares';
import { Direction } from './pages/Direction';
import NavBar from './components/NavBar';



export default function App() {




  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/softwares" element={<Softwares />} />
          <Route path="/direction" element={<Direction />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
