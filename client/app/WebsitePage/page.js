
'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FacilityPage from '../FacilityPage/page';
export default function WebsitePage() {
    useEffect(() => {
        import('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return (
        <div>
            <Header />

            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-200 px-8 py-2">
                
                {/* Text Section - Left Aligned */}
                <div className="w-full md:w-1/2 text-left -my-5 md:mb-0 md:pr-10">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-700 mb-4">
                        Farmily
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-green-800 font-medium mb-6">
                        Bringing Farmers and Families Together
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                        From the fields of dedicated farmers to your table – fresh, local, and sustainable.
                    </p>
                    <a
                        href="/EnterPage"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                        aria-current="page"
                    >
                        Start
                    </a>
                </div>

                {/* Image Section - Right Aligned */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end gap-6">
                    <div className="relative group">
                        <Image
                            src="/images/homePage.jpg"
                            alt="Farm landscape"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 mr-3"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
                    </div>
                    <div className="relative group">
                        <Image
                            src="/images/homePage2.jpg"
                            alt="Farmer with produce"
                            width={600}
                            height={600}
                            className="rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105 -my-24"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg" />
                    </div>
                </div>
            </div>
            <FacilityPage/>

            <Footer />
        </div>
    );
}
