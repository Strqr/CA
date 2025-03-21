import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Car, Calendar, MapPin, Phone, Shield, ChevronRight, Mail, User, MessageSquare, Wrench, FileCheck, Search, Network, Package, ClipboardCheck, CarFront, WrenchIcon, Trophy, Star, FileText, Clock } from 'lucide-react';
import About from './pages/About';
import Services from './pages/Services';
import FAQ from './pages/FAQ';

// Move Home component definition before App component
function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    registration: '',
    accidentDate: '',
    message: '',
    preferredVehicle: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative h-screen pt-20">
        <div className="absolute inset-0">
          <img
            src="https://www.shutterstock.com/shutterstock/photos/2139976221/display_1500/stock-photo-elegant-middle-age-business-woman-is-happy-and-satisfied-with-fast-and-reliable-towing-service-for-2139976221.jpg"
            alt="Modern car showroom"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Been in an Accident?<br />
            <span className="text-blue-400">$0 Cost</span> Replacement Car
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Get back on the road today with our premium replacement vehicles at absolutely no cost to you
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <a 
              href="#enquiry-form" 
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition flex items-center"
            >
              Enquire <ChevronRight className="ml-2" />
            </a>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </div>
        </div>
      </header>

      {/* Process Steps Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <ClipboardCheck className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-5xl font-bold text-blue-500 mb-4">1</span>
              <h3 className="text-xl font-semibold mb-2 text-white">Application</h3>
              <p className="text-gray-300">Submit your details through our simple online form</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Search className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-5xl font-bold text-blue-500 mb-4">2</span>
              <h3 className="text-xl font-semibold mb-2 text-white">Inspection</h3>
              <p className="text-gray-300">Our team assesses your vehicle's condition</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CarFront className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-5xl font-bold text-blue-500 mb-4">3</span>
              <h3 className="text-xl font-semibold mb-2 text-white">Replacement Car</h3>
              <p className="text-gray-300">Get immediate access to a premium replacement vehicle</p>
            </div>

            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <WrenchIcon className="w-10 h-10 text-blue-600" />
              </div>
              <span className="text-5xl font-bold text-blue-500 mb-4">4</span>
              <h3 className="text-xl font-semibold mb-2 text-white">Return</h3>
              <p className="text-gray-300">Your repaired vehicle is returned in perfect condition</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Services
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accident Replacement</h3>
              <p className="text-gray-600">Immediate replacement vehicles following accidents to keep you mobile</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <FileCheck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Claim Management</h3>
              <p className="text-gray-600">Professional handling of insurance claims and documentation</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Post Accident Inspections</h3>
              <p className="text-gray-600">Thorough vehicle inspections and damage assessments</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Wrench className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto/Business Consulting</h3>
              <p className="text-gray-600">Expert advice on automotive and business matters</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Network className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automotive Networking</h3>
              <p className="text-gray-600">Connect with industry professionals and service providers</p>
            </div>
            <div className="text-center">
              <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                <Package className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Parts Sourcing</h3>
              <p className="text-gray-600">Access to quality automotive parts and components</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Repair Centers Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Trophy className="w-12 h-12 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold">Partner Repair Centers</h2>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
              We've carefully selected and partnered with the most reputable repair centers across the region, each chosen for their exceptional service quality and proven track record. Our network includes multiple award-winning facilities that maintain the highest industry certifications and employ master technicians. This ensures your vehicle receives the highest standard of care and expertise during repairs, backed by our quality guarantee.
            </p>
            <div className="flex items-center justify-center gap-6 mt-8">
              <div className="flex items-center text-blue-600">
                <Star className="w-6 h-6" />
                <span className="ml-2 font-semibold">Award Winning</span>
              </div>
              <div className="flex items-center text-blue-600">
                <Shield className="w-6 h-6" />
                <span className="ml-2 font-semibold">Certified Excellence</span>
              </div>
              <div className="flex items-center text-blue-600">
                <FileCheck className="w-6 h-6" />
                <span className="ml-2 font-semibold">Quality Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section id="enquiry-form" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Get Your Free Replacement Vehicle Today
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Complete the form below and we'll arrange your replacement vehicle at no cost to you
          </p>
          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="accidentDate">
                  Date of Accident
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    id="accidentDate"
                    name="accidentDate"
                    value={formData.accidentDate}
                    onChange={handleChange}
                    max={today}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="registration">
                  Vehicle Registration
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    id="registration"
                    name="registration"
                    value={formData.registration}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent uppercase"
                    placeholder="ABC123"
                    pattern="[A-Za-z0-9]*"
                    title="Please enter letters and numbers only"
                    required
                  />
                </div>
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="preferredVehicle">
                  Your Vehicle
                </label>
                <div className="relative">
                  <Car className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    id="preferredVehicle"
                    name="preferredVehicle"
                    value={formData.preferredVehicle}
                    onChange={handleChange}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                  >
                    <option value="">Select your vehicle type</option>
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury Vehicle</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your accident and vehicle requirements..."
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Get Your Free Vehicle Now
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        {/* Floating Navigation */}
        <div className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
          <nav className="max-w-7xl mx-auto bg-gray-900/80 backdrop-blur-md rounded-full shadow-lg px-8 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-2">
                <Car className="w-8 h-8 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]" />
                <span className="text-2xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]">Club Automotive</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/about" className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:text-gray-300 transition">About</Link>
                <Link to="/services" className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:text-gray-300 transition">Services</Link>
                <Link to="/faq" className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)] hover:text-gray-300 transition">FAQ</Link>
              </div>
              <Link 
                to="/#enquiry-form"
                className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Enquire
              </Link>
            </div>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Top Footer */}
            <div className="grid md:grid-cols-3 gap-16 mb-12 pb-12 border-b border-gray-700">
              <div className="flex flex-col justify-between">
                <div>
                  <Link to="/" className="flex items-center space-x-2 mb-6">
                    <Car className="w-8 h-8 text-blue-500" />
                    <span className="text-2xl font-bold">Club Automotive</span>
                  </Link>
                  <p className="text-gray-400">Your trusted partner in accident replacement vehicles. Get back on the road with zero cost to you.</p>
                </div>
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/about" className="text-gray-400 hover:text-blue-500 transition flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-blue-500 transition flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-gray-400 hover:text-blue-500 transition flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/services" className="text-gray-400 hover:text-blue-500 transition flex items-center">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Partner Centers
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col">
                <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-blue-500" />
                    <a href="tel:+15551234567" className="text-gray-400 hover:text-blue-500 transition">+1 (555) 123-4567</a>
                  </li>
                  <li className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-blue-500" />
                    <a href="mailto:kovaleff.gleb@hotmail.com" className="text-gray-400 hover:text-blue-500 transition">kovaleff.gleb@hotmail.com</a>
                  </li>
                </ul>
              </div>

              {/* <div>
                <h4 className="text-lg font-semibold mb-6">Emergency Support</h4>
                <div className="bg-blue-600 rounded-lg p-6">
                  <Phone className="w-8 h-8 mb-4" />
                  <h5 className="text-xl font-bold mb-2">Need Help?</h5>
                  <p className="text-sm mb-4">Our support team is here to assist you.</p>
                  <a 
                    href="tel:+15551234567" 
                    className="inline-flex items-center justify-center w-full bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                  >
                    Call Now
                  </a>
                </div>
              </div> */}
            </div>

            {/* Bottom Footer */}
            <div className="text-center pt-8">
              <p className="text-gray-400">
                © {new Date().getFullYear()} Club Automotive. All rights reserved. Your trusted accident replacement vehicle service.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;