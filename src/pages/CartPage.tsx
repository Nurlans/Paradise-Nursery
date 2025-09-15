import React from 'react';
import { ShoppingBag, ArrowLeft, CreditCard } from 'lucide-react';
import CartItem from '../components/CartItem';
import { useCart } from '../hooks/useCart';

interface CartPageProps {
  onNavigate: (page: 'products') => void;
}

const CartPage: React.FC<CartPageProps> = ({ onNavigate }) => {
  const { cart } = useCart();

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any plants to your cart yet. Browse our collection to find your perfect green companions.
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2 mx-auto transition-all duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Continue Shopping</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    alert('Thank you for your purchase! Your order has been placed successfully.');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
            {cart.totalQuantity} items
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md h-fit sticky top-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h3>
            
            <div className="space-y-3 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">${cart.totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium text-emerald-600">Free</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-lg font-bold text-emerald-600">
                    ${cart.totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                onClick={handleCheckout}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 font-medium"
              >
                <CreditCard className="h-5 w-5" />
                <span>Checkout</span>
              </button>
              
              <button
                onClick={() => onNavigate('products')}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Continue Shopping</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;