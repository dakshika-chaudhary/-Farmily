

"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FarmerPage from '../FarmerPage/page';


export default function FarmerLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // Fetch the response from the backend
      const res = await axios.post('http://localhost:5000/api/farmer/login', { email, password });
      // localStorage.setItem('token', res.data.token);
      if (res.status === 200) {
        const { token, refreshToken } = res.data;
        // Redirect to the farmers page
        localStorage.setItem("token", token);
        console.log('Farmer has logged in successfully',res.data);
        localStorage.setItem("refreshToken", refreshToken);
        console.log('Farmer has logged in successfully');

        router.push('/FarmerPage');
      }
    } catch (error) {
      setError('Invalid email or password');
      console.error('Login failed:', error.response?.data || error);
    }
  };

  return (
    <div className="items-center justify-center h-screen  bg-gray-100">
      <Header/>
      <div className='flex justify-between'>
      <div className="items-center justify-center p-4 w-full  max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Farmer Login</h1>
        <form onSubmit={handleLogin} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email or firstname
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
                <nav>
                 <div>Login</div>
      {/* <Link href="/FarmerDashboard">Login</Link> */}
    </nav>  
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
