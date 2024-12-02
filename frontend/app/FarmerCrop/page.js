

'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';

const CropsList = () => {
  const [crops, setCrops] = useState([]); // Initialize `crops` as an empty array
  const [loading, setLoading] = useState(true); // Initialize `loading` as `true`

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const token = localStorage.getItem("token"); // Retrieve token from localStorage
        const res = await axios.get("http://localhost:5000/api/profilefarmer/farmercrops", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCrops(res.data); // Set fetched crops data
      } catch (error) {
        console.error('Error fetching the farmers crops list:', error);
      } finally {
        setLoading(false); // Set loading to `false` after fetching
      }
    };

    fetchCrops();
  }, []);

  // Loading state
  if (loading) return <p>Loading crops...</p>;

  // No crops found
  if (!crops || crops.length === 0) return <p>No crops added yet.</p>;

  // Render crops
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Your Crops</h2>
      <div>
        {crops.map((crop) => (
          <div key={crop._id} className="border p-4 mb-4 rounded shadow">
            <h3 className="font-semibold text-xl">{crop.name}</h3>
            <p>Price: ₹{crop.price}</p>
            <p>Quantity: {crop.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropsList;
