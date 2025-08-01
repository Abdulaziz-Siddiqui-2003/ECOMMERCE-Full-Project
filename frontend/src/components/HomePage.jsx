import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Header from './Header';
import Navbar from './Navbar';
import MainSection from './MainSection';
import Sale from './Sale';
import ItemsGroup from './ItemsGroup';
import ItemsGroupTwo from './ItemsGroupTwo';
import Inquiry from './Inquiry';
import RecommendedItems from './RecommendedItems';
import Services from './Services';
import SuppliersByRegion from './SuppliersByRegion';
import Newsletter from './Newsletter';
import Footer from './Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <Navbar />
      <MainSection />
      <Sale />
      <ItemsGroup />
      <ItemsGroupTwo />
      <Inquiry />
      <RecommendedItems />
      <Services />
      <SuppliersByRegion />
      <Newsletter />
      <Footer />

      {/* Add a link to navigate to the Product Listing Page */}
      <div className="text-center py-8">
        <Link
          to="/products"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-lg"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
