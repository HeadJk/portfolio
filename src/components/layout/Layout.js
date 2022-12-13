import React from 'react';
import { Outlet } from 'react-router-dom';
import './css/layout.css';

import TopNavbar from './TopNavbar';
import Footer from './Footer';
import WavyBottom from './WavyBottom';

const Layout = props => {
    return (
        <div className='layout-container'>
            <TopNavbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;