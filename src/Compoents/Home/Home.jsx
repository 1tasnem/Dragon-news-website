import React from 'react';
import Header from '../Head/Header';
import Latest from '../Latest/Latest';
import Navbar from '../Navbar/Navbar';
import AnotherNavbar from '../Navbar/AnotherNavbar';


const Home = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
            <Latest></Latest>            
            </div>
            <div className='w-11/12 mx-autors'>
                <Navbar></Navbar>
            </div>
            <AnotherNavbar></AnotherNavbar>
        </div>
    );
};

export default Home;