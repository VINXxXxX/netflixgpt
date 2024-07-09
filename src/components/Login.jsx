import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm,setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src="https://springboard-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/Netflix-background_860c8ece6b34fb4f43af02255ca8f225.jpg" alt="" /> 
      </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-85'>
                <h1 className='font-bold text-3xl py-4 text-white	' >{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md' />}
                <input type="text" placeholder="Email address" className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md' />
                <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md'/>
                <button className='p-4 my-6 w-full  bg-red-600 text-white rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className='py-4 text-white cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now " : "Already an user?"}</p>
            </form>
    </div>
  )
}

export default Login
