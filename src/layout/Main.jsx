import React from 'react';
import Header from '../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import  { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster></Toaster>

            
        </div>
    );
};

export default Main;