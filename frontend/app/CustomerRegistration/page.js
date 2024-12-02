"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function CustomerRegisterPage() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Send POST request to customer registration route
      const res = await axios.post('http://localhost:5000/api/customer/register', {
        firstName,
        lastName,
        email,
        password,
      });

      if (res.status === 200) {
        console.log('Customer has successfully registered');
        // router.push('/CustomerPage');
      }
    } catch (error) {
      setError('Registration failed. Please check your details.');
      console.error('Registration failed:', error.response?.data || error);
    }
  };

  return (
    <div className="items-center justify-center h-screen bg-gray-100 ">
      <Header/>
      <div className='flex p-4 justify-between'>
      <div className=" max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Customer Register</h1>
        <form onSubmit={handleRegister}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" >
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control rounded shadow-md"
              id="firstName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control rounded shadow-md"
              id="lastName"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control rounded shadow-md"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control rounded shadow-md"
              id="exampleInputPassword1"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Register</button>
          {error && <p className="text-danger mt-3">{error}</p>}
        </form>
      </div>
<div>picture</div>
      </div>
      <Footer/>
    </div>
  );
}
