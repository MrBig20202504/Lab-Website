import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Listening from './Pages/Listening';
import Reading from './Pages/Reading';
import Writing from './Pages/Writing';
import Speaking from './Pages/Speaking';
import SignUp from './Pages/Sign-up';
import TestingArea from './components/TestingArea';
import DetailScreen from './Pages/Detail';
import DetailReadingScreen from './Pages/DetailReading';
import TestingReadingArea from './components/TestingReadingArea';
import ResultScreen from './Pages/result';
import TestingWritingArea from './components/TestingWritingArea';
import DetailWritingScreen from './Pages/DetailWriting';
import ResultWritingScreen from './Pages/resultWriting';
import DetailSpeakingScreen from './Pages/DetailSpeaking';
import TestingSpeakingArea from './components/TestingSpeakingArea';
import AdminPage from './Pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Listening' element={<Listening />} />
        <Route path='/Reading' element={<Reading />} />
        <Route path='/Writing' element={<Writing />} />
        <Route path='/Speaking' element={<Speaking />} />
        <Route path='/Sign-up' element={<SignUp />} />
        <Route path="/Testing/:lis_id" element={<TestingArea />} />
        <Route path="/Detail/:lis_id" element={<DetailScreen />} />
        <Route path="/TestingReading/:rea_id" element={<TestingReadingArea />} />
        <Route path="/DetailReading/:rea_id" element={<DetailReadingScreen />} />
        <Route path="/TestingWriting/:wri_id" element={<TestingWritingArea />} />
        <Route path="/DetailWriting/:wri_id" element={<DetailWritingScreen />} />
        <Route path="/TestingSpeaking/:spe_id" element={<TestingSpeakingArea />} />
        <Route path="/DetailSpeaking/:spe_id" element={<DetailSpeakingScreen />} />
        <Route path="/Result" element={<ResultScreen />} />
        <Route path="/ResultWriting" element={<ResultWritingScreen />} />
        <Route path="/Admin7355608" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
