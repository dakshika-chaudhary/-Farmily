'use client'

import {useState,useEffect} from 'react';
import axios from 'axios';
// import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';


export default function CropsList(){
   
    const [state,setState] = useState({

        crops:[],
        type:'',
        loading:true,
         error:'',
    });

    const [purchasedItems, setPurchasedItems] = useState([]);

    const handlePurchase = (crop) => {
        console.log(crop);
        const updatedItems = [...purchasedItems, crop]; 
    setPurchasedItems(updatedItems); 
    localStorage.setItem('purchasedItems', JSON.stringify(updatedItems)); 
    console.log(`Purchased crop: ${crop.name}`);
  
};

    const handleCropType=(e) => setState((prevState) => ({ ...prevState, type: e.target.value }))

    useEffect(()=>{
        const fetchCrops = async()=>{
        try{
            const res = await axios.get('http://localhost:5000/api/crops/all',{params:{type:state.type}});
            setState((prevState)=>({
                ...prevState,
                crops:res.data,
                loading:false,
                error:''
,            }));
        }
        catch(error){
            setState((prevState)=>({
                ...prevState,
                crops:[],
                loading:false,
                error:`Failed to load crops ${error.message}`,
            }));
        }
      };

      fetchCrops();
    },[state.type]);

    const {crops,type,loading,error} = state;

    if (loading) {
        return <div>Loading...</div>;
    }

    if(error){
        return <div>{error}</div>
    }

    return(
        
        <div className="container mx-auto p-4">
            <Header></Header>
            <h1 className="text-2xl font-bold mb-4">Available Crops</h1>
            
{/* Dropdown for filtering by crop type */}
<label htmlFor="cropType" className="block font-semibold mb-2">Filter by Crop Type:</label>
<select
        id="cropType"
        value={type}
        onChange={handleCropType}
        className="mb-4 p-2 border rounded"
      >
        <option value="">All</option>
        <option value="vegetable">Vegetable</option>
        <option value="fruit">Fruit</option>
        <option value="grain">Grain</option>
        {/* Add more crop types as needed */}
      </select>

            <div className="container mx-auto p-4 max-w-full">
    <h1 className="text-2xl font-bold mb-4">Available Crops</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {crops.map((crop) => (

                    <div key={crop._id} className="border p-4 rounded shadow flex justify-between">
                        <div>
                        <h2 className="text-xl font-bold">{crop.name}</h2>
                        <p>Price: ${crop.price}</p>
                        <p>Quantity: {crop.quantity}</p>
                        <p>Description: {crop.description}</p>
                        <p>
                            Added by: {crop.addedBy?.firstName} {crop.addedBy?.lastName}
                        </p>
                        <button
                            className="bg-blue-500 text-white px-4 py-2 mt-2"
                            onClick={() => handlePurchase(crop)}
                        >
                            Purchase
                        </button>
                        </div>

                        {/* image */}
                        <div><h1>hello</h1></div>
                    </div>
                ))}
            </div>
</div>

            <Footer></Footer>
        </div>
    );
}