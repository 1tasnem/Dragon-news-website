import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import userIcon from '../../assets/user.png'
import NavbarLeft from './NavbarLeft';
import RightNavbar from './RightNavbar';
import CategoryNews from '../Pages/CategoryNews';
import AnotherNavbar from './AnotherNavbar';
import { AuthContext } from '../Provider/AuthProvider';



const Navbar = () => {
    const{ user,logOut } = useContext(AuthContext);
    return (
        <div>
        <div className='w-11/12 flex justify-between items-center'>
            <div className=''>{user && user.email}</div>
            <div className='nav space-x-5 font-bold'>
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
   </div>
   <img className='w-10 rounded-full'src={user?.photo_url} alt=""/>
   
   <div className='login flex gap-2'>
    <div>
      {
        user && user?.email? <div><img src = {user?.photoURL} alt=''></img>
        <p>{user.displayName}</p>
        
        </div>:<img src = {userIcon} alt=''></img>
      }
   
  </div>
  {
    user && user?.email? (<button onClick={logOut} className='btn btn-neutral rounded-none'>LogOut</button>) :(<Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>)
  }
  
   </div>
   </div>
   
        </div>
        
    );
};

export default Navbar;