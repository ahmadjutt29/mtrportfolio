function Services() {
  const services = [
    {
      title: 'Automotive Parts Manufacturing',
      description: 'Precision manufacturing of durable auto components using high-grade materials and engineering standards.',
      features: ['Air Filtration Systems', 'Rubber Mountings', 'Engine Components', 'Quality Control Testing'],
    },
    {
      title: 'OEM & Aftermarket Supply',
      description: 'Supplying parts suitable for OEM replacements and aftermarket needs across vehicle brands.',
      features: ['Original Equipment Standards', 'Aftermarket Compatibility', 'Multi-Brand Support', 'Certification Compliance'],
    },
    {
      title: 'Bulk & Wholesale Supply',
      description: 'Large-scale supply solutions for distributors, workshops, and fleet operators.',
      features: ['Volume Discounts', 'Fleet Packages', 'Distributor Programs', 'Nationwide Delivery'],
    },
    {
      title: 'Custom Fit Solutions',
      description: 'Engineered components designed to meet varied vehicle and industry requirements.',
      features: ['Custom Specifications', 'Industry Applications', 'Agriculture & Construction', 'Technical Consultation'],
    },
  ]

  const whyChooseUs = [
    'Over 40 years of manufacturing excellence',
    'High-grade materials and precision engineering',
    'Trusted by workshops and distributors nationwide',
    'Extensive product range for commercial vehicles',
    'Competitive pricing for bulk orders',
    'Reliable delivery and customer support',
  ]

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-dark text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">Our Services</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive automotive parts solutions for commercial vehicles, cars, and multi-industry applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-dark rounded-lg p-6 sm:p-8 transition-all duration-500 md:hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98] animate-scale-in animate-stagger"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300 text-sm sm:text-base">
                    <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <section className="bg-gradient-to-r from-dark to-secondary rounded-lg p-6 sm:p-8 md:p-12 animate-fade-up animation-delay-400 animate-stagger">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:bg-secondary"
              >
                <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 bg-primary rounded-full mr-3 sm:mr-4 flex-shrink-0"></span>
                <span className="text-gray-300 text-base sm:text-lg">{reason}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Services
