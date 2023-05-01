import React from 'react';
import Header from '../component/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../component/Footer/Footer';

const Main = () => {
    return (
        <div>
            <h2>main</h2>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>

            
        </div>
    );
};

export default Main;