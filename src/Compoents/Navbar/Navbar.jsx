import React from 'react';
import { Link, Outlet } from 'react-router';
import userIcon from '../../assets/user.png'
import NavbarLeft from './NavbarLeft';
import RightNavbar from './RightNavbar';
import CategoryNews from '../Pages/CategoryNews';



const Navbar = () => {
    return (
        <div>
        <div className='flex justify-between items-center'>
            <div className=''></div>
            <div className='nav space-x-5 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
   </div>
   
   <div className='login flex gap-2'>
    <div>
    <img src = {userIcon} alt=''></img>
  </div>
  <button className='btn btn-neutral rounded-none'>Login</button>
   </div>
   </div>
   <main className='w-11/12 mx-auto pt-5 grid grid-cols-12'>
   <aside className='left col-span-3'>
    <NavbarLeft></NavbarLeft>
   </aside>
   <section className='col-span-6 mx-10'>    
    <Outlet></Outlet>
   </section>
   <aside className='col-span-3'>
    <RightNavbar></RightNavbar>
   </aside>
        </main>
        </div>
        
    );
};

export default Navbar;