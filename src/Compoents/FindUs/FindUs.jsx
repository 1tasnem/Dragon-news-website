import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div className='space-y-2'> 
            <h2 className='font-semibold mb-3'>Find Us on</h2>
            <div className="join flex join-vertical *bg-base-100">
  <button className="btn join-item justify-start">
    <FaFacebook></FaFacebook>Facebook
  </button>
  <button className="btn join-item justify-start">
<FaInstagram></FaInstagram>Instagram 
  </button>
  <button className="btn join-item  justify-start">
    <FaTwitter></FaTwitter> Twitter
  </button>
</div>
        </div>
    );
};

export default FindUs;