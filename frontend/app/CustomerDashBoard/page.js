// 'use client'
// import {useState,useEffect} from 'react';
// import axios from 'axios';


// const CustomerDashboard = () =>{
//     const [customerData,setCustomerData] = useState(null);
//     const [error, setError] = useState("");


//     useEffect(()=>{
//         const fetchDashboardData = async()=>{
//             try{
//                 // Token stored during login
//                 const token=localStorage.getItem("token");
//                 if (!token) {
//                     setError("User not authenticated");
//                     return;
//                   }
          
//                 const config = {
//                     headers: {
//                       Authorization: Bearer ${token},
//                     },
//             };

//             const response = await axios.get("http://localhost:5000/api/dashcustomer/cdashboard", config);
//             setCustomerData(response.data);
      
//         }
//         catch (err) {
//             console.error("Error fetching dashboard data:", err);
//             setError("Unable to fetch dashboard data");
//           }
//         };
//         fetchDashboardData();
//     },[]);
//     if (error) {
//         return <div>{error}</div>;
//       }
    
'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CustomerDashboard = () => {
  const [customerData, setCustomerData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        // Token stored during login
        const token = localStorage.getItem("token");
        if (!token) {
          setError("User not authenticated");
          return;
        }

        const config = {
          headers: {
            Authorization: `Bearer ${token}`, // Corrected syntax
          },
        };

        const response = await axios.get("http://localhost:5000/api/dashcustomer/cdashboard", config);
        setCustomerData(response.data);
        console.log(response.data);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
        setError("Unable to fetch dashboard data");
      }
    };

    fetchDashboardData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
      return (
        <div className="container mx-auto p-4">
          
      <div className='p-4'>
          <h1 className='text-2xl font-bold mb-4'>Customer Dashboard</h1>
          {customerData?(
             <div className='bg-white p-4 rounded shadow'>
              <p>Name: {customerData.firstName} {customerData.lastName}</p>
              <p>Email: {customerData.email}</p>
              <p>Phone: {customerData.phoneNumber || "Not provided"}</p>
              <p>Location: {customerData.location || "Not provided"}</p>
            </div>
          ): (<p>Loading...</p>)}

</div>
          
        </div>
      );
    };
    export default CustomerDashboard;
