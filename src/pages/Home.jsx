import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [bgImages, setBgImages] = useState([
    'https://res.cloudinary.com/dfifagzl1/image/upload/v1767001514/Screenshot_2025-12-29_at_2.44.42_PM_ymcinr.png',
  ]);

  // On mount and on resize, update bgImages for mobile/desktop
  useEffect(() => {
    function updateBgImages() {
      if (window.innerWidth < 640) {
        setBgImages([
          'https://res.cloudinary.com/dfifagzl1/image/upload/v1767004821/Screenshot_2025-12-29_at_3.39.45_PM_yxzscy.png',
        ]);
      } else {
        setBgImages([
          'https://res.cloudinary.com/dfifagzl1/image/upload/v1767001514/Screenshot_2025-12-29_at_2.44.42_PM_ymcinr.png',
        ]);
      }
    }
    updateBgImages();
    window.addEventListener('resize', updateBgImages);
    return () => window.removeEventListener('resize', updateBgImages);
  }, []);

  const features = [
    { title: 'Quality', desc: 'High-grade materials and precision engineering in every component' },
    { title: 'Reliability', desc: 'Trusted by workshops and distributors for over 40 years' },
    { title: 'Performance', desc: 'Components designed for durability and optimal vehicle performance' },
  ];

  // State to manage current background index
  const [currentBg, setCurrentBg] = useState(0);

  // Rotate background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); // 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-secondary text-white">

      {/* Full-Page Slideshow Background - CHANGED FROM 'fixed' TO 'absolute' */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none transition-all duration-1000">
        {bgImages.map((url, i) => (
          <div
            key={i}
            className={`absolute inset-0 w-full h-full bg-center transition-opacity duration-1000 ${i === currentBg ? 'opacity-100' : 'opacity-0'} bg-cover sm:bg-cover bg-no-repeat`}
            style={{ backgroundImage: `url('${url}')`, backgroundSize: 'cover', backgroundPosition: 'center', ...(window.innerWidth < 640 ? { backgroundSize: '100% 100%' } : {}) }}
          />
        ))}
        <div className="absolute inset-0 bg-secondary opacity-60 mix-blend-multiply"></div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 w-full flex-1 flex flex-col items-center">

        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center w-full min-h-[50vh] md:min-h-[70vh] py-20">
          <img
            src="https://res.cloudinary.com/dfifagzl1/image/upload/v1765871248/Adobe_Express_-_file_sq39ja.png"
            alt="MTR Auto Parts Logo"
            className="h-20 sm:h-24 md:h-28 w-auto mx-auto mb-4 sm:mb-6 animate-bounce transition duration-300 hover:scale-105"
          />
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 animate-fade-up">
            M.T.R COMPANY
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 animate-fade-up">
            Leading manufacturer and supplier of high-quality automotive parts — delivering reliable, durable, and performance-driven components since 1980.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 animate-fade-up">
            <Link
              to="/products"
              className="bg-secondary border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary hover:text-secondary transition-all duration-300 md:hover:scale-105 active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="bg-secondary border-2 border-primary text-primary px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-primary hover:text-secondary transition-all duration-300 md:hover:scale-105 active:scale-[0.98]"
            >
              Get a Quote
            </Link>
          </div>
        </section>

        {/* Business Intro / Why Choose MTR */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 w-full max-w-4xl mx-auto text-center">
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
        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16 mb-16 w-full max-w-6xl px-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-secondary p-6 sm:p-8 rounded-lg text-center transition-all duration-500 md:hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-[0.98]"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-gray-300 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </section>

      </main>
    </div>
  );
}

export default Home;