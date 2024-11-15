// 'use client';
// import React,{useRef} from "react";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';

// import {Swiper,SwiperSlide}  from 'swiper/react';
// import { Autoplay, Pagination, Navigation } from 'swiper';

// const facilities = [
//   {
//     title: 'Add Crops',
//     description: 'Farmers can easily add details about their crops to the marketplace for customers to browse and purchase.',
//     image: '/images/add-crops.jpg',
//   },
//   {
//     title: 'Select Crops',
//     description: 'Customers can explore and select crops directly from our platform, enabling a direct farmer-to-customer connection.',
//     image: '/images/sell-farmer.jpg',
//   },
//   {
//     title: 'Add Crop Demands',
//     description: 'Customers can specify their demand for particular crops, allowing farmers to fulfill these requests directly.',
//     image: '/images/add-demands.jpg',
//   },
// ];

// export default function FacilityPage(){


//   const onAutoplayTimeLeft = (s, time, progress) => {
//     progressCircle.current.style.setProperty('--progress', 1 - progress);
//     progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
//   };
//   return (
//     <div className="max-h-screen bg-gray-100 py-12">
//        <h1 className="text-2xl font-bold text-center mb-10 text-green-600">Our Facilities</h1>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         onAutoplayTimeLeft={onAutoplayTimeLeft}
//         className="mySwiper"
//       >
//        {facilities.map((facility,index)=>(
//         <SwiperSlide key={index}>
         
//           <div className="p-5 flex rounded-lg shadow-lg bg-white">
//               <img
//                 src={facility.image}
//                 alt={facility.title}
//                 className="w-full h-56 object-cover rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h2 className="text-2xl font-semibold text-gray-800">{facility.title}</h2>
//                 <p className="text-gray-600 mt-2">{facility.description}</p>
//               </div>
//             </div>
//         </SwiperSlide>
//        ))}
       
//       </Swiper>
//     </div>
//   );


// }

'use client';
import React,{useRef} from "react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {Swiper,SwiperSlide}  from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

const facilities = [
  {
    title: 'Add Crops',
    description: 'Farmers can easily add details about their crops to the marketplace for customers to browse and purchase.',
    image: '/images/add-crops.jpg',
  },
  {
    title: 'Select Crops',
    description: 'Customers can explore and select crops directly from our platform, enabling a direct farmer-to-customer connection.',
    image: '/images/zoe-schaeffer-D_VjFp1ds1Y-unsplash.jpg',
  },
  {
    title: 'Add Crop Demands',
    description: 'Customers can specify their demand for particular crops, allowing farmers to fulfill these requests directly.',
    image: '/images/zoe-schaeffer-D_VjFp1ds1Y-unsplash.jpg',
  },
];

export default function FacilityPage() {


  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-green-700">Our Facilities</h1>

      <Swiper
        spaceBetween={40}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper max-w-5xl mx-auto"
      >
        {facilities.map((facility, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={facility.image}
                alt={facility.title}
             

                className="w-full md:w-1/2 h-64 md:h-auto object-cover"
              />
              <div className="p-6 flex flex-col justify-between">
                <h2 className="text-3xl font-semibold text-green-800 mb-4">{facility.title}</h2>
                <p className="text-gray-700 mb-6">{facility.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

       
      </Swiper>
    </div>
  );
}

