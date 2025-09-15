import React from 'react';
import { ShoppingCart, Leaf } from 'lucide-react';
import { Plant } from '../data/plants';
import { useCart } from '../hooks/useCart';

interface PlantCardProps {
  plant: Plant;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const { addItemToCart } = useCart();

  const handleAddToCart = () => {
    addItemToCart(plant);
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={plant.image}
          alt={plant.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-2">
          <Leaf className="h-5 w-5 text-emerald-600" />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{plant.name}</h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{plant.description}</p>
        
        {plant.benefits && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {plant.benefits.slice(0, 3).map((benefit, index) => (
                <span
                  key={index}
                  className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded-full"
                >
                  {benefit}
                </span>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-emerald-600">
            ${plant.price.toFixed(2)}
          </span>
          <button
            onClick={handleAddToCart}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;