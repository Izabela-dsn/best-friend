import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/login';
import Home from './pages/Landing/landing';
import User from './pages/User/user';


function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/login" element={<Login />} /> 
                <Route path='/user' element={<User />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;