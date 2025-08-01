import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Breadcrumb from './Breadcrumb';
import Sidebar from './Sidebar';
import ContentTop from './ContentTop';
import ContentProduct from './ContentProduct';

function ProductListingPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Breadcrumb />

      <div className="container mx-auto px-4 py-8 font-sans flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/4">
          <Sidebar />
        </div>

        <div className="w-full lg:w-3/4">
          <ContentTop itemCount={6} categoryName="Mobile accessory" />
          <ContentProduct />

          <div className="text-center mt-10">
            <Link
              to="/"
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300 shadow-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
}

export default ProductListingPage;
