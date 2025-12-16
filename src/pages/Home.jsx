function Home() {
  return (
    <div className="bg-secondary text-white">
      {/* Hero Section with Gradient */}
      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://res.cloudinary.com/your-cloud-name/image/upload/v1234567890/hero/hero-bg.jpg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary via-dark to-secondary/90"></div>
        {/* Accent gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 animate-fade-up will-change-transform">
            M.T.R Auto Parts
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 animate-fade-up animation-delay-200 animate-stagger">
            Leading manufacturer and supplier of high-quality automotive parts — delivering reliable, durable, and performance-driven components since 1980.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fade-up animation-delay-400 animate-stagger">
            <a
              href="/products"
              className="bg-gradient-to-r from-primary to-accent text-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:from-accent hover:to-primary transition-all duration-300 md:hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              View Products
            </a>
            <a
              href="/contact"
              className="border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary hover:text-secondary transition-all duration-300 md:hover:scale-105 active:scale-[0.98]"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      {/* Business Intro Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark to-secondary">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
              Why Choose MTR?
            </h2>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6 sm:mb-8">
              With over four decades of experience, MTR is a trusted name in the automotive industry. 
              We specialize in manufacturing precision-engineered components for commercial vehicles, 
              cars, and multi-industry applications.
            </p>
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              From air filtration systems to rubber mountings, our products are built to deliver 
              superior performance, safety, and durability. Partner with MTR for quality you can rely on.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
            {[
              { title: 'Quality', desc: 'High-grade materials and precision engineering in every component' },
              { title: 'Reliability', desc: 'Trusted by workshops and distributors for over 40 years' },
              { title: 'Performance', desc: 'Components designed for durability and optimal vehicle performance' },
            ].map((item, index) => (
              <div
                key={index}
                className={`bg-secondary p-6 sm:p-8 rounded-lg text-center transition-all duration-500 md:hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] animate-scale-in animate-stagger animation-delay-${(index + 1) * 200}`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
