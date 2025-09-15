import React from 'react';
import { ShoppingCart, Leaf, Home, Store } from 'lucide-react';
import { useCart } from '../hooks/useCart';

interface NavbarProps {
  currentPage: 'landing' | 'products' | 'cart';
  onNavigate: (page: 'landing' | 'products' | 'cart') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-emerald-600" />
            <span className="text-xl font-bold text-gray-800">Paradise Nursery</span>
          </div>
          
          <div className="flex items-center space-x-8">
            <button
              onClick={() => onNavigate('landing')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 'landing'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </button>
            
            <button
              onClick={() => onNavigate('products')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                currentPage === 'products'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <Store className="h-5 w-5" />
              <span>Plants</span>
            </button>
            
            <button
              onClick={() => onNavigate('cart')}
              className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 relative ${
                currentPage === 'cart'
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              <div className="relative">
                <ShoppingCart className="h-5 w-5" />
                {cart.totalQuantity > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                    {cart.totalQuantity}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;