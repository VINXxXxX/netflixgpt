import React, { useRef, useState } from 'react';
import Header from './Header';
import { CheckValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BGI, LOGO } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleButtonClick = () => {
    const validationMessage = CheckValidData(emailRef.current.value, passwordRef.current.value);
    setErrorMessage(validationMessage);

    if (validationMessage) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameRef.current.value,
            photoURL: LOGO,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName, photoURL }));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, email, displayName, photoURL } = user;
          dispatch(addUser({ uid, email, displayName, photoURL }));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BGI} alt="" />
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-85'
        onSubmit={(e) => { e.preventDefault(); }} >
        <h1 className='font-bold text-3xl py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&
          <input type="text"
            ref={nameRef}
            placeholder="Full Name"
            className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md text-white' />}
        <input type="text"
          ref={emailRef}
          placeholder="Email address"
          className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md text-white' />
        <input type="password"
          ref={passwordRef}
          placeholder='Password'
          className='p-4 my-4 w-full bg-gray-950 border border-gray-600 rounded-md text-white' />
        <p className='text-red-600 text-md'>{errorMessage}</p>
        <button onClick={handleButtonClick}
          className='p-4 my-6 w-full bg-red-600 text-white rounded-md'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='py-4 text-white cursor-pointer'
          onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already an user?"}</p>
      </form>
    </div>
  );
};

export default Login;
