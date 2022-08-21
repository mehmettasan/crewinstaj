import React from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Menu from './components/Menu/Menu';
import TopBar from './components/TopBar/TopBar';
import Users from './Pages/Users/Users';
import Posts from './Pages/Posts/Posts';


const App = () => {
  return (
    <div className='container'>
      <Menu />
      <div className="page_body">
        <TopBar />
        <Routes>
          <Route path='users' element={<Users />} />
          <Route path='posts' element={<Posts />} />
        </Routes>
      </div>
    </div>

  )
}

export default App