function About() {
  const historyItems = [
    {
      year: '1980',
      title: 'Foundation',
      description: 'MTR was founded with a commitment to quality and reliability in auto parts manufacturing.',
    },
    {
      year: '1995',
      title: 'Product Expansion',
      description: 'Expanded product range to include air filtration systems and rubber components.',
    },
    {
      year: '2010',
      title: 'Market Growth',
      description: 'Established partnerships with major distributors and workshops nationwide.',
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as a trusted name serving customers across multiple sectors worldwide.',
    },
  ]

  const values = [
    { name: 'Quality', desc: 'Commitment to quality and precision in every component we manufacture.' },
    { name: 'Innovation', desc: 'Engineering excellence through continuous improvement and modern techniques.' },
    { name: 'Trust', desc: 'Building long-term relationships based on reliability and customer satisfaction.' },
    { name: 'Performance', desc: 'Delivering products that enhance durability, safety, and vehicle performance.' },
  ]

  return (
    <div className="py-10 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary via-dark to-secondary text-white">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-16 animate-fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">About MTR</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            A leading manufacturer and supplier of high-quality automotive parts since 1980.
          </p>
        </div>

        {/* Company Story */}
        <section className="mb-10 sm:mb-16 animate-fade-in-left animation-delay-200 animate-stagger">
          <div className="bg-dark rounded-lg p-6 sm:p-8 transition-all duration-500 md:hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4">Our Story</h2>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              Founded in 1980, MTR began as a focused auto-parts manufacturer with a commitment to quality and reliability. Over the past four decades, the company has evolved into a trusted name in the automotive industry.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4 text-sm sm:text-base">
              Today, we serve customers across multiple sectors worldwide, offering an extensive range of products from air filtration systems to rubber mountings. Our mission remains unchanged: to deliver high-quality, reliable automotive parts that enhance performance, safety, and durability.
            </p>
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              At MTR, we believe in building lasting partnerships with our clients. Whether you're a workshop, distributor, or fleet operator, we're committed to providing the components you need to keep vehicles running at their best.
            </p>
          </div>
        </section>

        {/* Company History Timeline */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center animate-fade-up">Our Journey</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {historyItems.map((item, index) => (
              <div
                key={index}
                className="bg-dark rounded-lg p-4 sm:p-6 transition-all duration-500 md:hover:scale-105 hover:shadow-lg hover:shadow-primary/20 cursor-pointer active:scale-[0.98] animate-scale-in animate-stagger"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <span className="text-primary text-3xl sm:text-4xl font-bold">{item.year}</span>
                <h3 className="text-lg sm:text-xl font-semibold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 sm:mb-8 text-center animate-fade-up">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-dark rounded-lg p-6 sm:p-8 text-center transition-all duration-500 md:hover:scale-105 hover:bg-dark/80 active:scale-[0.98] animate-fade-in-right animate-stagger"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{value.name}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
