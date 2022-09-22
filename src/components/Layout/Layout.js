import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Layout = ({title, foot, bak}) => {
    
    return (
        <div>
            <Header title={title} bak={bak} />

            <Outlet />

            {
                foot ? <Footer /> : null 
            }
            
        </div>
    );
};

export default Layout;