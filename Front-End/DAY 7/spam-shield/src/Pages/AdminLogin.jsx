import React, { useState, useEffect } from 'react';
import '../Assets/CSS/Login.css';
import logo from '../Assets/images/ninja-black.png';
import { useNavigate } from 'react-router-dom';
import { login } from '../Pages/Redux/UserSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectUser } from './Redux/UserSlice';

function AdminLogin() {
  // Regex
  const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Dispatch
  const Dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  // to Navigate
  let Nav = useNavigate();

  const handleOnEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnPassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    if (user) {
      Nav('/admindash');
    } else {
      console.log('Not logged in');
    }
  }, [user]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    checkEmail();
    checkPassword();
    if (emailValid === true && passwordValid === true && email !== '' && password !== '') {
      Dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
      console.log('sign in done ');
    }
  };
  const checkEmail = () => {
    setEmailValid(emailRegex.test(email));
  };
  const checkPassword = () => {
    setPasswordValid(passwordRegex.test(password));
  };

  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-40 w-auto" src={logo} alt="spam-shield" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Admin Sign In
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleOnEmail}
                  className="block w-full py-2 px-3 rounded-md border border-black-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 focus:ring-offset-0 focus:ring-offset-opacity-50 sm:text-sm"
                />
              </div>
              {!emailValid ? <span style={{ color: 'red' }}>Invalid Email</span> : ''}
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  id="password"
                  name='password'
                 type='password'
                  autoComplete="current-password"
                  value={password}
                  onChange={handleOnPassword}
                  className="block w-full py-2 px-3 rounded-md border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500 focus:ring focus:ring-opacity-50 focus:ring-offset-0 focus:ring-offset-opacity-50 sm:text-sm"
                />
                  
              </div>
              {!passwordValid ? <span style={{ color: 'red' }}>Invalid Password</span> : ''}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none focus:ring focus:ring-opacity-50"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-3 text-center text-sm text-gray-900">
            Not yet Registered?{' '}
            <a href="/sign-up" className="font-medium text-indigo-600 hover:text-indigo-400">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </>
  );
 
   

}
export default AdminLogin;


