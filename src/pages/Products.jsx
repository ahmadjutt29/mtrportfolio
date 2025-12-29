


import { useState } from 'react';
import productsData from '../assets/products.json';
import ProductCard from '../components/ProductCard';


  function Products() {
    const [selectedCategory, setSelectedCategory] = useState(null);

  
    return (
      <div className="min-h-screen bg-black text-primary py-8 px-2 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-10 text-center tracking-tight">Our Products</h1>

        {/* Category Cards Grid */}
        {!selectedCategory && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {productsData.map((cat, idx) => (
              <div
                key={cat.id}
                className="group bg-dark rounded-2xl shadow-lg border border-primary/40 hover:border-primary transition-all duration-300 overflow-hidden cursor-pointer flex flex-col items-center relative"
                onClick={() => setSelectedCategory(cat)}
                style={{ minHeight: '320px' }}
              >
                <div className="w-full aspect-[4/3] bg-secondary flex items-center justify-center overflow-hidden">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    style={{ maxHeight: '220px' }}
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full bg-black/80 py-3 px-2 text-center">
                  <h3 className="text-primary text-lg sm:text-xl font-bold tracking-wide animate-fade-up" style={{animationDelay: `${idx * 80}ms`}}>{cat.name}</h3>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SubProducts Grid for Selected Category */}
        {selectedCategory && (
          <div className="flex flex-col items-center animate-fade-up">
            <button
              onClick={() => setSelectedCategory(null)}
              className="mb-8 px-6 py-2 bg-primary text-black font-bold rounded-lg shadow hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              ← Back to Categories
            </button>
            <div className="w-full max-w-4xl mx-auto mb-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 tracking-tight animate-fade-up">{selectedCategory.name}</h2>
              <p className="text-gray-300 text-base sm:text-lg animate-fade-up" style={{animationDelay: '100ms'}}>{selectedCategory.description}</p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-full overflow-y-auto max-h-[80vh]">
              {selectedCategory.subProducts.map((sub, idx) => (
                <div key={sub.id} className="animate-fade-up" style={{animationDelay: `${idx * 100}ms`}}>
                  <div className="bg-dark border border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 md:hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] flex flex-col h-full">
                    <div className="relative w-full aspect-[4/3] bg-secondary overflow-hidden">
                      <img
                        src={sub.imageUrl}
                        alt={sub.name}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-fill rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
