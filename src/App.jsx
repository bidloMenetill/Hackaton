import React from 'react';
 import './App.css';
 import Header from './components/Header/Header';
 import { Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import Prediction from './pages/Prediction/Prediction';
 
const  App = () => {
  return  (
     <>
  <Header/>
  <main>
          <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/blog" element={<Blog/>}/>
    <Route path="/prediction" element={<Prediction/>}/>
  </Routes>
  </main>
      </>
  )
  
  }


export default App;
