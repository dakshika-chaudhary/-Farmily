//Customer Demand Page
'use client';

import {useEffect, useState} from 'react';
import axios from 'axios';

export default function CustomerDemandPage(){
    const [demandData, setDemandData] = useState({
        customerId:'',
        crop: '',
        quantity: '',
        date: '',
        price: '' 
    });

useEffect(()=>{
    const storedCustomerId = localStorage.getItem('customerId');
    if(storedCustomerId){
        setDemandData((prevData)=>({ ...prevData, customerId: storedCustomerId }));
    }
},[]);

const handleChange = (e)=>{
    setDemandData({
        ...demandData,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post("http://localhost:5000/api/customerDemand/demand",demandData);
           
            if (res.status === 200) {
                console.log("Demand has been successfully submitted");
                Router.push('/demands'); // Redirect to a demands page or confirmation page
            }

    }
    catch (error) {
        console.error('Error:', error);
        alert('Error submitting demand');
    }
};
return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Submit Crop Demand</h1>
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
            <div>
                <label htmlFor="crop" className="block mb-2">Crop Name:</label>
                <input
                    type="text"
                    id="crop"
                    name="crop"
                    value={demandData.crop}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <div>
                <label htmlFor="quantity" className="block mb-2">Quantity:</label>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={demandData.quantity}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <div>
                <label htmlFor="price" className="block mb-2">Expected Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={demandData.price}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <div>
                <label htmlFor="date" className="block mb-2">Desired Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={demandData.date}
                    onChange={handleChange}
                    className="border p-2 w-full"
                    required
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2">Submit Demand</button>
        </form>
    </div>
);
    
}

