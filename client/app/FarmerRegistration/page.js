"use client";

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export default function FarmerRegisterPage() {
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
      const res = await axios.post('http://localhost:5000/api/farmer/register', { firstName, lastName, email, password });
      if (res.status === 200) {
        console.log('Farmer has successfully registered');
        router.push('/FarmersAddCrop');
      }
    } catch (error) {
      setError('Registration failed. Please check your details.');
      console.error('Registration failed:', error.response?.data || error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Header/>
    <div className="w-full max-w-sm">
      <h1 className="text-2xl font-bold mb-4 text-center">Farmer Register</h1>
    <form onSubmit={handleRegister}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-control"
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
          className="form-control"
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
          className="form-control"
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
          className="form-control"
          id="exampleInputPassword1"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">Register</button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </form>
   </div> 
   <Footer/>
   </div>
  );
}
