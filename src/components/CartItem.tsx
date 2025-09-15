import React from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../store/cartSlice';
import { useCart } from '../hooks/useCart';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseItemQuantity, decreaseItemQuantity, removeItemFromCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4">
      <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">Unit Price:</span>
          <span className="text-emerald-600 font-medium">${item.price.toFixed(2)}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <button
          onClick={() => decreaseItemQuantity(item.id)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
          disabled={item.quantity <= 1}
        >
          <Minus className="h-4 w-4 text-gray-600" />
        </button>
        
        <span className="w-12 text-center font-medium text-lg">{item.quantity}</span>
        
        <button
          onClick={() => increaseItemQuantity(item.id)}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
        >
          <Plus className="h-4 w-4 text-gray-600" />
        </button>
      </div>
      
      <div className="text-right">
        <div className="text-lg font-bold text-gray-800">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button
          onClick={() => removeItemFromCart(item.id)}
          className="mt-2 p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-colors duration-200"
        >
          <Trash2 className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;