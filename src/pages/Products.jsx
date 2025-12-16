import { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import productsData from '../assets/products.json'

function Products() {
  const [products, setProducts] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Load products from JSON data
    setProducts(productsData)
    // Trigger animations after mount
    setTimeout(() => setIsLoaded(true), 100)
  }, [])

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-dark text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Our Products</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Discover our range of products designed to help your business succeed.
          </p>
        </div>

        {/* Products Grid with Staggered Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 ${
                isLoaded 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                willChange: index < 6 ? 'transform, opacity' : 'auto'
              }}
            >
              <ProductCard
                image={product.imageUrl}
                name={product.name}
                description={product.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
