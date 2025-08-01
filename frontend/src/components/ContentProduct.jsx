import React from 'react';
import { FaStar } from 'react-icons/fa'; // ✅ Star icon import

// ✅ Image imports
import canoncamera from '../assets/image 33.png';
import Gopro from '../assets/image 34.png';
import Gopro2 from '../assets/image 23.png';
import Tablet from '../assets/smartphones.png';
import smartwatch from '../assets/8.png';
import Headphones from '../assets/headphones.png';

const productData = [
  {
    title: 'Canon Camera EOS 2000, Black 10x zoom',
    price: '$998.00',
    oldPrice: '$1218.00',
    image: canoncamera,
    description: 'High-performance camera with 10x optical zoom and advanced image stabilization.',
  },
  {
    title: 'GoPro HERO6 4K Action Camera – Black',
    price: '$998.00',
    image: Gopro2,
    description: 'Shoot stunning 4K videos and capture every adventure with ultra-wide lens and durability.',
  },
  {
    title: 'GoPro HERO6 4K Action Camera – Black',
    price: '$998.00',
    image: Tablet,
    description: 'Portable device perfect for browsing, entertainment, and productivity on the go.',
  },
  {
    title: 'GoPro HERO6 4K Action Camera – Black',
    price: '$998.00',
    image: Gopro,
    description: 'Versatile camera ideal for outdoor shoots, sports, and creative content makers.',
  },
  {
    title: 'GoPro HERO6 4K Action Camera – Black',
    price: '$998.00',
    oldPrice: '$1128.00',
    image: smartwatch,
    description: 'Smartwatch with health tracking, message notifications, and long battery life.',
  },
  {
    title: 'GoPro HERO6 4K Action Camera – Black',
    price: '$998.00',
    image: Headphones,
    description: 'Noise-cancelling wireless headphones for immersive audio and clear communication.',
  }
];

const ContentProduct = () => {
  return (
    <div className="max-w-[920px] mx-auto bg-white rounded shadow p-6 font-sans">
      {productData.map((item, index) => (
        <div key={index} className="flex items-start gap-4 py-6 border-b last:border-none">
          <div className="w-[100px] h-[100px] bg-gray-100 rounded overflow-hidden flex-shrink-0">
            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
          </div>
          <div className="flex-1">
            <h2 className="text-md font-semibold">{item.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-bold text-red-600">{item.price}</span>
              {item.oldPrice && (
                <span className="text-sm text-gray-500 line-through">{item.oldPrice}</span>
              )}
            </div>
            <div className="flex items-center text-sm text-yellow-500 mt-1">
              <FaStar className="mr-1" /> 7.5
              <span className="text-gray-500 ml-2">• 154 orders</span>
              <span className="text-green-600 ml-2">• Free Shipping</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            <a href="#" className="text-blue-600 text-sm font-medium mt-2 inline-block">View details</a>
          </div>
          <div className="pt-2">
            <button className="text-gray-400 hover:text-blue-500 text-xl">♡</button>
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 border-t mt-4">
        
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <label className="text-sm">Show</label>
          <select className="border px-2 py-1 rounded text-sm">
            <option>10</option>
            <option>20</option>
            <option>30</option>
          </select>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <button className="px-2 py-1 border rounded">1</button>
          <button className="px-2 py-1 border rounded">2</button>
          <button className="px-2 py-1 border rounded">3</button>
          <button className="px-2 py-1 border rounded">›</button>
        </div>
      </div>
    </div>
  );
};

export default ContentProduct;
