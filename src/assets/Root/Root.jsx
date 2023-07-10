import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import NavBar from '../Navbar/NavBar';
import './Root.css'

const Root = () => {
    return (
        <div className='root'>
            <NavBar></NavBar>
        <Outlet/>
      </div>
    );
};

export default Root;