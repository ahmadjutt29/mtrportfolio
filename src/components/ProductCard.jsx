function ProductCard({ image, name, description }) {
  return (
    <div className="bg-dark border border-primary rounded-lg shadow-lg p-4 transition-transform duration-300 md:hover:scale-105 hover:shadow-xl active:scale-[0.98]">
      <img
        src={image}
        alt={name}
        loading="lazy"
        className="rounded-t-lg h-40 sm:h-48 w-full object-cover mb-4"
      />
      <h3 className="text-lg sm:text-xl font-bold text-primary mb-2">{name}</h3>
      <p className="text-white text-sm sm:text-base">{description}</p>
    </div>
  )
}

export default ProductCard
