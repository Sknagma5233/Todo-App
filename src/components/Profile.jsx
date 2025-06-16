import React from 'react';
import nagma from '../assets/images/nagma.jpg';

const Profile = () => {
  return (
    <>
      <div className='mt-4 '>
        <div className='flex flex-col sm:flex-row items-center'>
          {/* Profile-pic */}
          <div className='rounded-full w-20 h-20 sm:w-16 sm:h-16 bg-blue-300 overflow-hidden'>
            <img 
              src={nagma} 
              alt="" 
              className='w-full h-full object-cover'
            />
          </div>

          {/* Profile-Name */}
          <div className='ml-0 sm:ml-6 mt-3 sm:mt-0 text-center sm:text-left'>
            <p className='text-sm sm:text-base'>Do-It</p>
            <h1 className='text-purple-400 font-bold text-lg sm:text-2xl'>Nagma Shaikh</h1>
          </div>
        </div>

        {/* Divider */}
        <div className='mt-5 sm:mt-7 mx-auto sm:mx-0 w-40 sm:w-64 h-1 bg-purple-400'></div>
      </div>
    </>
  );
}

export default Profile;
