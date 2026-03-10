'use client'
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const About = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-16 lg:px-32 py-10 text-center">
        <div className="bg-[#E6E9F2] py-16 md:py-24 px-6 md:px-14 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
          <p className="text-orange-600 font-medium mb-4 uppercase tracking-wider text-sm">Welcome to QuickCart</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-6 max-w-3xl leading-tight">
            Elevating Your Everyday Shopping Experience
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing a seamless, high-quality, and incredibly fast ecommerce journey. Discover a world of premium products, curated just for you.
          </p>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          <div className="md:w-1/2 relative bg-[#E6E9F2] rounded-xl aspect-[4/3] flex items-center justify-center overflow-hidden p-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-transparent"></div>
              <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 leading-snug text-center relative z-10">
                Quality. <br/> <span className="text-orange-600">Speed.</span> <br/> Reliability.
              </h2>
          </div>

          <div className="md:w-1/2 space-y-6">
            <div>
              <p className="text-orange-600 mb-2 font-medium">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight">Built for modern lifestyle</h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
              <p>
                QuickCart was born out of a desire for something better. We noticed that consumers were constantly compromising between finding high-quality products and waiting weeks for delivery.
              </p>
              <p>
                Our platform bridges that gap. We utilize a highly curated catalog alongside state-of-the-art logistics to ensure that the things you love arrive exactly when you need them. No compromises, just results.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-20 px-6 md:px-16 lg:px-32 bg-gray-50 border-t border-gray-100">
        <div className="text-center mb-16">
          <p className="text-orange-600 font-medium mb-2">Our Promise</p>
          <h2 className="text-3xl font-semibold text-gray-900">Why Shop With Us</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: 'Lightning Shipping', 
              desc: 'Our expansive logistics network ensures your products arrive when you need them, without delays.' 
            },
            { 
              title: 'Curated Quality', 
              desc: 'Every single product on our platform is strictly vetted for premium quality and proven reliability.' 
            },
            { 
              title: '24/7 Support', 
              desc: 'Our passionate customer success team is always here to help you resolve any issues instantly.' 
            }
          ].map((val, idx) => (
            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:border-orange-200 transition-colors">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6 text-orange-600 font-semibold text-lg">
                {idx + 1}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{val.title}</h3>
              <p className="text-gray-600 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-16 mb-10 text-center">
         <div className="bg-[#E6E9F2] rounded-xl py-16 px-6 flex flex-col items-center">
           <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">Ready to start shopping?</h2>
           <p className="text-gray-600 max-w-xl mx-auto mb-8 text-lg">
             Join thousands of satisfied customers and experience the QuickCart difference today.
           </p>
           <button 
             onClick={() => window.location.href = '/all-products'} 
             className="bg-orange-600 text-white px-8 py-3.5 rounded-full font-medium shadow-md hover:bg-orange-700 transition"
           >
             Explore Our Products
           </button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
