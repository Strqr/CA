import React from 'react';
import { Shield, Users, Trophy, Building } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-white pt-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Club Automotive</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in accident replacement vehicles, providing premium service since 2010.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Founded with a vision to revolutionize the accident replacement vehicle industry, Club Automotive has grown to become a leading provider of premium replacement vehicles.
            </p>
            <p className="text-gray-600">
              We understand that accidents are stressful enough without having to worry about transportation. That's why we've made it our mission to provide hassle-free, premium replacement vehicles at zero cost to our clients.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Company Stats</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">10+</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">1000+</p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">Quality</p>
                <p className="text-gray-600">Partner Centers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-blue-600">Premium</p>
                <p className="text-gray-600">Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Service</h3>
            <p className="text-gray-600">Reliable and professional service you can count on</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
            <p className="text-gray-600">Dedicated professionals at your service</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Award Winning</h3>
            <p className="text-gray-600">Recognized for excellence in service</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Nationwide</h3>
            <p className="text-gray-600">Coverage across major cities</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;