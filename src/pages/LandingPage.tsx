import React from 'react';
import { Leaf, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (page: 'products') => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-emerald-600 p-4 rounded-full">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Welcome to <span className="text-emerald-600">Paradise Nursery</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your space with our premium collection of house plants. From aromatic herbs to medicinal wonders, 
              discover the perfect green companions for your home and garden.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-full text-lg font-semibold flex items-center space-x-2 mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Explore Our Plants</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-200 rounded-full opacity-15 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Paradise Nursery?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                Hand-selected plants from trusted growers, ensuring the highest quality and health for your green companions.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Care Tips</h3>
              <p className="text-gray-600">
                Detailed care instructions and ongoing support to help your plants thrive in their new home.
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-emerald-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Diverse Collection</h3>
              <p className="text-gray-600">
                From aromatic herbs to medicinal plants, indoor beauties to outdoor showstoppers - we have it all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Create Your Green Paradise?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Browse our extensive collection of plants and start your journey to a more beautiful, healthier living space.
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-white text-emerald-600 hover:bg-gray-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;