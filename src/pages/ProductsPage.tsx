import React from 'react';
import { plants } from '../data/plants';
import PlantCard from '../components/PlantCard';

const ProductsPage: React.FC = () => {
  const categories = ['Aromatic Plants', 'Medicinal Plants', 'Indoor Plants', 'Outdoor Plants'];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Plant Collection</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated selection of plants, each chosen for their beauty, benefits, and ease of care.
          </p>
        </div>

        {categories.map((category) => {
          const categoryPlants = plants.filter(plant => plant.category === category);
          
          return (
            <section key={category} className="mb-16">
              <div className="flex items-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800">{category}</h2>
                <div className="ml-4 flex-grow h-px bg-gradient-to-r from-emerald-200 to-transparent"></div>
                <span className="ml-4 bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                  {categoryPlants.length} plants
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {categoryPlants.map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;