'use client'
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function EnterPage(){

    const [isFarmer,setIsFarmer] = useState(false);
    const router = useRouter();

    return(
        
      
        <div className="items-center justify-center min-h-screen bg-gray-100">
           <Header/>
           
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-6 mt-8">Welcome to Farmily</h2>

{/* select among customer and farmer */}
            <div className='text-center mb-6'>
                <button 
                  onClick={()=>setIsFarmer(false)}
                  className={`px-4 py-2 ${!isFarmer ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                >
                    Customer
                </button>
                <button onClick={()=>setIsFarmer(true)}
                    className={`px-4 py-2 ${isFarmer ? 'bg-green-600 text-white' : 'bg-gray-200'}`}
                    >
                        Farmer
                    </button>
                </div>


{/* to login or to register */}
<div className="text-center mb-8">
<div>
    <a href={isFarmer ? "/FarmerRegistration":"/CustomerRegistration"}
     className="block py-2 px-4 mb-4 text-green-600 hover:underline">
        Register as {isFarmer ? 'Farmer' : 'Customer'}
     </a>
     <a
                            href={isFarmer ? "/FarmerLogin" : "/CustomerLogin"}
                            className="block py-2 px-4 text-green-600 hover:underline"
                        >
                            Login as {isFarmer ? 'Farmer' : 'Customer'}
                        </a>
</div>
</div>
 <Footer/>
           
            </div>  
            
           
    )
}