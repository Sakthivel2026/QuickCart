'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    // Simulate API call
    toast.success("Message sent successfully! We'll be in touch soon.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full px-6 md:px-16 lg:px-32 py-10 text-center">
        <div className="bg-[#E6E9F2] py-16 md:py-24 px-6 md:px-14 rounded-xl flex flex-col items-center justify-center relative overflow-hidden">
          <p className="text-orange-600 font-medium mb-4 uppercase tracking-wider text-sm">Customer Support</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium text-gray-800 mb-6 max-w-3xl leading-tight">
            We're Here to Help You
          </h1>
          <p className="text-gray-600 md:text-lg max-w-2xl mx-auto leading-relaxed">
            Have a question about your order, a product, or need assistance? Reach out to our dedicated team and we'll ensure your QuickCart experience is nothing short of perfect.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="w-full px-6 md:px-16 lg:px-32 py-16">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* Contact Information */}
          <div className="md:w-[45%] space-y-10 flex flex-col justify-center">
            <div>
              <p className="text-orange-600 mb-2 font-medium">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Fill out the form to quickly dispatch a message to our support team, or reference our direct contact details below. We aim for zero-wait response times.
              </p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-orange-600 text-2xl">✉️</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Email Support</h3>
                  <p className="text-gray-600">support@quickcart.dev</p>
                  <p className="text-sm text-gray-500 mt-1">Typical reply time: within hours</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-orange-600 text-2xl">📞</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Direct Line</h3>
                  <p className="text-gray-600">+1-234-567-890</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri, 9am - 6pm EST</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center shrink-0">
                  <span className="text-orange-600 text-2xl">🏢</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Headquarters</h3>
                  <p className="text-gray-600">QuickCart Operations Center</p>
                  <p className="text-gray-600">123 Commerce Avenue, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Details */}
          <div className="md:w-[55%] bg-gray-50 p-8 md:p-12 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.02)]"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.02)]"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-5 py-3.5 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-colors bg-white shadow-[0px_2px_4px_rgba(0,0,0,0.02)] resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-600 text-white font-medium px-8 py-4 rounded-full shadow-md hover:bg-orange-700 transition transform hover:-translate-y-[1px]"
              >
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
