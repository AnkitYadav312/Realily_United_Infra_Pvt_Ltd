


import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
// import Logo from '../assets/img/logo.svg';




const Header = () => {
  const [user , setUser] = useState(null);


  return (
    <header className='py-6 mb-12 border-b'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* <Link to='/'>
          <img src={Logo} alt=' ' />
        </Link> */}
        {/* <h1 className='text-3xl font-bold'>Reality United</h1> */}
        <h1 className='text-3xl font-bold text-gray-800'>
  Reality United<span className="ml-1 text-yellow-500 text-3x4">.</span>
</h1>
        {user === null ? (
          <div className='flex item-center gap-6'>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/Login'>Log in</Link>
            <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to='/SignUp'>Sign up</Link>
          </div>
        ) : (
         
          <div className="text-gray-200 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg shadow-lg p-4 md:p-6">
  <p className="text-base md:text-lg font-semibold">Welcome, <span className="text-xs md:text-sm text-yellow-400">{user.email}</span></p>
</div>
        )}
      </div>
    </header>
  );
};

export default Header;