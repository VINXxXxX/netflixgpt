import React from 'react';
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const user = useSelector(store => store.user);
  const navigate = useNavigate();
  
  console.log("Current User:", user); // Debugging line to check user state

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error");
    });
  }

  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <div className='w-48'>
        <img src="Netflix_Logo.png" alt="Netflix Logo" />
      </div>
      
      {user && (
        <div className='flex p-2'>
          <img className='w-20' src={user?.photoURL} alt="user icon" />
          <button onClick={handleSignOut} 
                  className='m-4 p-2 relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-red-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear before:z-0 hover:bg-white hover:text-red-600 hover:shadow-red-600 hover:before:border-[25px]'>
            <span className="relative z-10">Signout</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
