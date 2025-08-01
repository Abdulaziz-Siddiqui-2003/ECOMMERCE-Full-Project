import React from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import ProductDetailContent from './ProductDetailContent';
import BlockDetail from './BlockDetail';
import AsideItems from './AsideItems';
import BlockRecom from './BlockRecom'; 
import BannerProduct from './BannerProduct';

function ProductDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <Header />
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumbs Placeholder */}
        <nav className="text-sm text-gray-500 mb-4">
          <a href="/" className="hover:underline">Home</a> &gt; <a href="/products" className="hover:underline">Products</a> &gt; <span className="font-semibold">Product {id}</span>
        </nav>

        {/* Product Detail Content */}
        <ProductDetailContent />

        {/* Block Detail and Aside Items Section */}
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* BlockDetail - takes up more space on larger screens */}
          <div className="w-full lg:w-3/4">
            <BlockDetail />
          </div>

          {/* AsideItems - takes up less space on larger screens */}
          <div className="w-full lg:w-1/4">
            <AsideItems />
          </div>
        </div>
      </main>

      {/* BlockRecom - now rendered outside the main content area */}
      <div className="container mx-auto px-4 py-2"> {/* Added container and padding for consistency */}
        <BlockRecom />
      </div>
        <BannerProduct/>
        <Footer />
    </div>
  );
}

export default ProductDetailPage;
