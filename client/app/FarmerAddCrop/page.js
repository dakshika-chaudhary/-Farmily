'use client'; // Ensure this is at the top

import { useState } from 'react';
import axios from 'axios';
//import { useRouter } from 'next/navigation'; // Update import for Next 13+ app directory
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddCrop() {
    const [cropData, setCropData] = useState({
        name: '',
        type: '',
        price: '',
        description: '',
        quantity: '',
        images:[]

    });

    // const router = useRouter(); // Ensure this is called in a client component

    const handleChange = (e) => {
        setCropData({
            ...cropData,
            [e.target.name]: e.target.value,
        });
    };

    //Handle Multiple Images selection
const handleImageChange=(e)=>{
    setCropData({
        ...cropData,
        images:Array.from(e.target.files),
    });
};

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting crop data:", cropData);

        const formData = new FormData();
        formData.append('name', cropData.name);
        formData.append('type', cropData.type);
        formData.append('price', cropData.price);
        formData.append('description', cropData.description);
        formData.append('quantity', cropData.quantity);
       

        cropData.images.forEach((image)=>{
            formData.append('images', image);  // Append each image to the FormData object
        });


        try {
            const res = await axios.post('http://localhost:5000/api/crops/add', formData,{
                headers: {
                    'Content-Type': 'multipart/form-data', // Ensure the server understands that it's a multipart form submission
                },
            });
            if (res.status === 201) {
                console.log("Crop has been successfully added:", res.data);
               // Use the router to navigate
            }
        } catch (error) {
            console.error('Error adding crop:', error);
            alert('Error adding crop');
        }
    };

    return (
        <div className='container '>
            <Header/>
            <h1 className='text-center'>Add Crop</h1>
            <form onSubmit={handleSubmit} className='p-4'>
                <div>
                    <label htmlFor="name">Crop Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={cropData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="type">Crop Type:</label>
                    <input
                        type="text"
                        id="type"
                        name="type"
                        value={cropData.type}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="price">Price per Unit:</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={cropData.price}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={cropData.quantity}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="description">Description:</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={cropData.description}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="images">Upload Images:</label>
                    <input
                        type="file"
                        id="images"
                        name="images"
                        multiple
                        onChange={handleImageChange}
                    />
                </div>

                <button type="submit" className='btn btn-primary mt-3'>Add Crop</button>
            </form>
            <Footer/>
        </div>
    );
}

