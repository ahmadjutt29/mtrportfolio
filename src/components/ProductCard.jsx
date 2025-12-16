function ProductCard({ image, name, description }) {
  return (
    <div className="bg-dark border border-primary rounded-lg shadow-lg overflow-hidden transition-transform duration-300 md:hover:scale-105 hover:shadow-xl hover:shadow-primary/20 active:scale-[0.98] flex flex-col h-full">
      {/* Image Container with fixed aspect ratio */}
      <div className="relative w-full pt-[75%] bg-secondary overflow-hidden">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-2 transition-transform duration-300 hover:scale-110"
        />
      </div>
      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{name}</h3>
        <p className="text-gray-300 text-sm sm:text-base flex-grow">{description}</p>
      </div>
    </div>
  )
}

export default ProductCard
