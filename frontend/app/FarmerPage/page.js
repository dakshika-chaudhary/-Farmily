'use client'

import { useEffect,useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FarmerDashboard from "../FarmerDashboard/page";
import FarmerAddCrop from "../FarmerAddCrop/page";
import FarmerCrop from "../FarmerCrop/page.js";


export default function FarmerPage(){
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    },[]);

   
        const [activeComponent,setActiveComponent] = useState("dashboard");

        const renderContent = () =>{
            if(activeComponent === "dashboard"){

                return <FarmerDashboard/>
            }
            else if(activeComponent === "addCrops"){
                return <FarmerAddCrop/>
            }
            else if(activeComponent === "CropsList"){
                return <FarmerCrop/>
            }
            else{
                return <FarmerDashboard/>
            }
        }

    
    
    return (
        <div>
            <Header/>

             <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-8 py-2">
             <div className="flex-grow p-5">
        {renderContent()}
      </div>
      <div className="w-64 bg-gray-200 p-4 border-l">
      <h2 className="text-lg font-bold mb-4">Farmer Options</h2>
      <ul>
        <li   className="cursor-pointer hover:bg-gray-300 p-2"
        onClick={() => setActiveComponent("dashboard")}>
            Dashboard
        </li>
        <li className="cursor-pointer hover:bg-gray-300 p-2"
        onClick={()=>setActiveComponent("addCrops")}>
        addCrops</li>

        <li className="cursor-pointer hover:bg-gray-300 p-2"
        onClick = {()=>setActiveComponent("CropsList")}>presentCrops</li>
      </ul>
        </div>

            </div>
        
            <Footer/>
        </div>
    )
}