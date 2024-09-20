import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Courses } from './pages/Courses';
import { Home } from './pages/Home';
import { Softwares } from './pages/Softwares';
import { Direction } from './pages/Direction';
import NavBar from './components/NavBar';
import Announcement from './components/Announcement'; // Ensure this is the correct path

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && <Announcement />}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/softwares" element={<Softwares />} />
        <Route path="/direction" element={<Direction />} />
      </Routes>
    </div>
  );
}

export default App;
