import React from 'react';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

const Layout = ({title, foot, bak, headBG, headyes}) => {
    
    return (
        <div>
            {
                headyes ? <Header title={title} bak={bak} headBG={headBG} /> : null
            }
            

            <Outlet />

            {
                foot ? <Footer />  : null 
            }
        
        </div>
    );
};

export default Layout;