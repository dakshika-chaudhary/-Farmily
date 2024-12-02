'use client'

import { useState , useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PurchasededItems(){
    const [purchasedItems,setPurchasedItems] = useState([]);

    useEffect(()=>{
      // When you save structured data (like an array or object) to localStorage, it must first be converted to a string using JSON.stringify. When you retrieve this data, it comes back as a string, so you need to convert it back to its original structure using JSON.parse.
   const savedItems = JSON.parse(localStorage.getItem('purchasedItems'))||[]; 
  console.log(savedItems);
   setPurchasedItems(savedItems);
    },[]);

    return (
        <div className='container mx-auto p-4'>
          
          <h1 className="text-2xl font-bold mb-4">Purchased Items</h1>

          {
          purchasedItems.length > 0 ? (
            <>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {purchasedItems.map((crop) => (
               
                <li key={crop._id} className="border p-4 rounded shadow bg-white">
                  <h2 className="text-xl font-bold">{crop.name}</h2>
                  <p>Price: ${crop.price}</p>
                  <p>Quantity: {crop.quantity}</p>
                  <p>Description: {crop.description}</p>
                  <p>Added by: {crop.addedBy?.firstName || 'Unknown'} {crop.addedBy?.lastName || 'Unknown'}</p>
                  <p>Type: {crop.type}</p> {/* Rendering 'type' property */}
                  <p>Created at: {new Date(crop.createdAt).toLocaleDateString()}</p> {/* Format 'createdAt' */}
                  <p>Updated at: {new Date(crop.updatedAt).toLocaleDateString()}</p> {/* Format 'updatedAt' */}
                </li>
              ))}
            </ul>

{/* 
          <div className='p-2'>Total Amount = ${totalPrice}</div> */}

          {/* {!isOrderPlaced ? (
            <button
              onClick={placeOrder}
              className="bg-green-500 text-white px-4 py-2 mt-4 rounded"
            >
              Place Order
            </button>
          ) : (
            <p className="mt-4 text-green-500">Order placed successfully!</p>
          )} */}
       </>
      ) : (
        <p>No items have been purchased yet.</p>
      )}
          
        </div>
      );
      
    }