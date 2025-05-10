import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../components/Landing/Navbar";

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
    <Navbar/>
    <div className='flex justify-center items-center bg-white min-h-screen'>
      <div className='bg-blue-200 p-8 rounded-lg shadow-md w-80 hover:shadow-2xl'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 font-semibold mb-2'>
              Name
            </label>
            <input 
              type="text" 
              id="name"
              placeholder='Enter Name' 
              autoComplete='off' 
              name='name' 
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {/* <div className='mb-4'>
            <label htmlFor="name" className='block text-gray-700 font-semibold mb-2'>
              Address
            </label>
            <input 
              type="text" 
              id="address"
              placeholder='Enter Address' 
              autoComplete='off' 
              name='address' 
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setAddress(e.target.value)}
            />
          </div> */}
          <div className='mb-4'>
            <label htmlFor="email" className='block text-gray-700 font-semibold mb-2'>
              Email
            </label>
            <input 
              type="email" 
              id="email"
              placeholder='Enter Email' 
              autoComplete='off' 
              name='email' 
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-6'>
            <label htmlFor="password" className='block text-gray-700 font-semibold mb-2'>
              Password
            </label>
            <input 
              type="password" 
              id="password"
              placeholder='Enter Password' 
              autoComplete='off' 
              name='password' 
              className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type='submit' 
            className='w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition duration-300'
          >
            Register
          </button>
        </form>
        <p className='text-sm text-center mt-4'>
          Already have an account?
        </p>
        <Link 
          to='/login' 
          className='block text-center mt-2 text-purple-600 hover:underline'
        >
          Login
        </Link>
      </div>
    </div>
    </>
  );
}

export default Signup;
