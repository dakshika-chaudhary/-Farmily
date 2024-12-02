
"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CustomerDashboard from '../CustomerDashBoard/page';

export default function CustomerLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Fetch the response from the backend
      const res = await axios.post('http://localhost:5000/api/customer/login', { email, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('customerId', res.data.customerId);
      
      if (res.status === 200) {
        // Redirect to the farmers page
        console.log('Customer has logged in successfully');
        router.push('/CustomerPage');
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login failed:', error.response?.data || error);
    }
  };

  return (
    <div className="items-center justify-center h-screen bg-gray-100">

      <Header/>
      <div className='flex justify-between'>
      <div className=" p-4 w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Customer Login</h1>
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
              </label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
              />
          </div>
          <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
              </label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  required
              />
          </div>
          <div className="flex items-center justify-between">
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                  Login
              </button>
          </div>
      </form>

      </div>
      <div>picture</div>
      </div>
      <Footer/>
    </div>
  );
}
