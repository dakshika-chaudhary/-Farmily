'use client';

import {useState,useEffect} from 'react';
import axios from "axios";

const FarmerDashboard = () =>{
  const [farmerData,setFarmerData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // useEffect(()=>{
  //   const fetchDashboardData = async () =>{
  //     const token = localStorage.getItem("token");
  //     if(!token){
  //       setError("You are not logged in. Please log in to access the dashboard.");
  //       setLoading(false);
  //       return; 
  //     }
  // try{
  //    // Token stored during login
      
  //     const config = {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };

  //     const response = await axios.get("http://localhost:5000/api/dashfarmer/dashboard", config)
  //     setFarmerData(response.data);
  //     setLoading(false);

  // }
  // catch (err) {
  //   console.error("Error fetching dashboard data:", err);
  //   setError("Unable to fetch dashboard data");

  //   if (err.response?.status === 401 && err.response?.data?.code === "TOKEN_EXPIRED") {
  //     try{
  //     const refreshResponse = await axios.post("http://localhost:5000/api/refresh-token",{
  //           refreshToken : localStorage.getItem("refreshToken"),
  //     }
  //   );

  //       // Update the token in localStorage
  //   const newToken = refreshResponse.data.accessToken;
  //   localStorage.setItem("token", newToken);

  //     // Retry fetching the dashboard data with the new token
  //     const retryConfig = {
  //       headers: {
  //         Authorization: `Bearer ${newToken}`,
  //       },
  //     };

  //     //to get dashboard data of the user from backend after verfing the token
  //     const retryResponse = await axios.get("http://localhost:5000/api/dashfarmer/dashboard", retryConfig);
  //     setFarmerData(retryResponse.data);
  //     }
  //     catch(refreshError){
  //       console.error("Error refreshing token:", refreshError);
  //       setError("Session expired. Please log in again.");
  //       localStorage.clear();
  //       window.location.href = "/login";
  //     }
  //  }
  //  else{
  //   console.error("Error fetching dashboard data:", err);
  //   setError("Unable to fetch dashboard data as cannot resolve the refresh token");
  //  }
  //  setLoading(false);
    
  // }
  //   };
  //   fetchDashboardData();

  // },[]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("You are not logged in. Please log in to access the dashboard.");
        setLoading(false);
        return;
      }
  
      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get("http://localhost:5000/api/dashfarmer/dashboard", config);
        setFarmerData(response.data);
        setLoading(false);
      } catch (err) {
        if (err.response?.status === 401 && err.response?.data?.code === "TOKEN_EXPIRED") {
          try {
            // Refresh the token
            const refreshResponse = await axios.post("http://localhost:5000/api/refresh-token", {
              refreshToken: localStorage.getItem("refreshToken"),
            });
  
            const newToken = refreshResponse.data.accessToken;
            localStorage.setItem("token", newToken);
  
            // Retry fetching dashboard data
            const retryConfig = {
              headers: {
                Authorization: `Bearer ${newToken}`,
              },
            };
            const retryResponse = await axios.get("http://localhost:5000/api/dashfarmer/dashboard", retryConfig);
            setFarmerData(retryResponse.data);
            setError("");
          } catch (refreshError) {
            setError("Session expired. Please log in again.");
            localStorage.clear();
            window.location.href = "/login";
          }
        } else {
          setError("Unable to fetch dashboard data.");
        }
        setLoading(false);
      }
    };
    fetchDashboardData();
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>farmer Dashboard</h1>
      {farmerData?(
          <div>
          <p>Name: {farmerData.firstName} {farmerData.lastName}</p>
          <p>Email: {farmerData.email}</p>
          <p>Phone: {farmerData.phoneNumber || "Not provided"}</p>
          <p>Location: {farmerData.location || "Not provided"}</p>
        </div>
      ): (<p>Loading...</p>)}
    </div>
  );
};
export default FarmerDashboard;
