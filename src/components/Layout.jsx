import React from 'react';
import Login from './login/Login';
import Home from './home/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './common/Header';

const Layout = () => {
  return (
    <div>
        <Header/>
        <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Layout