import React from 'react';
import Header from '../Head/Header';
import Latest from '../Latest/Latest';
import Navbar from '../Navbar/Navbar';


const Home = () => {
    return (
        <div className='font-poppins'>
            <Header></Header>
            <div className='w-11/12 mx-auto'>
            <Latest></Latest>            
            </div>
            <div className='w-11/12 mx-auto'>
                <Navbar></Navbar>
            </div>
            
        </div>
    );
};

export default Home;