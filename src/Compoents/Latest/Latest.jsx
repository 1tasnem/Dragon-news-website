import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router';

const Latest = () => {
    return (
        <div className='flex gap-2 items-center bg-cyan-200 p-2'>
            <p className='bg-red-500 text-base-100 px-3 py-2'>Latest</p>
           <Marquee   className='space-x-10'>
            <Link  to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Exercitationem, enim.</Link>
              <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Exercitationem, enim.</Link>
              <Link to='/news'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Exercitationem, enim.</Link>

           </Marquee>
        </div>
    );
};

export default Latest;