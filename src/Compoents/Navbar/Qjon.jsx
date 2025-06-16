import React from 'react';
import cl from '../../assets/class.png'
import pl from '../../assets/playground.png'
import sw from '../../assets/swimming.png'

const Qjon = () => {
    return (
        <div>
            <div className='card flex flex-col bg-base-300'>

              <img src={cl} alt='cl'></img>
              <img src={pl} alt='pl'></img>
              <img src={sw} alt='sw'></img>
            </div>
        </div>
    );
};

export default Qjon;