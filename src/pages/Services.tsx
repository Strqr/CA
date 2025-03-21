import React from 'react';
import { Shield, FileCheck, Search, Wrench, Network, Package, MessageSquare } from 'lucide-react';

function Services() {
  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive accident replacement and automotive services tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Shield className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Accident Replacement</h3>
            <p className="text-gray-600">
              Immediate replacement vehicles following accidents to keep you mobile. Zero cost to you with comprehensive insurance coverage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Claim Management</h3>
            <p className="text-gray-600">
              Professional handling of insurance claims and documentation. We manage the entire process for a stress-free experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Search className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Vehicle Inspections</h3>
            <p className="text-gray-600">
              Thorough post-accident inspections and damage assessments by certified professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Wrench className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Auto Consulting</h3>
            <p className="text-gray-600">
              Expert advice on automotive matters and repair processes. Professional guidance when you need it most.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Network className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Network Access</h3>
            <p className="text-gray-600">
              Access to our extensive network of certified repair centers and automotive professionals.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <Package className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Parts Sourcing</h3>
            <p className="text-gray-600">
              Quality automotive parts sourcing through our verified supplier network.
            </p>
          </div>
        </div>

         <div className="text-center pb-32">
          <h2 className="text-3xl font-bold mb-6">Need Assistance?</h2>
          <div className="flex items-center justify-center gap-4">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <p className="text-xl">Contact our support team at <a href="tel:+15551234567" className="text-blue-600 font-semibold">+1 (555) 123-4567</a></p>
          </div>
        </div> 
      </div>
    </div>
  );
}

export default Services;