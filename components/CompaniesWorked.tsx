import Image from 'next/image';
import React from 'react';


interface LogoItem {
  id: string;
  src: string;
  alt: string;
}

const CompaniesWorked: React.FC = () => {

  const logos: LogoItem[] = [
    // { id: '1', src: 'https://placehold.co/120x60/ffffff/333333?text=ERGOTRON', alt: 'Ergotron Logo' },
    { id: '2', src: '/companies/cleverproperty.png', alt: 'cleverproperty' },
    { id: '3', src: '/companies/carlsonkuehl.png', alt: 'carlsonkuehl' },
    { id: '4', src: '/companies/habitat28.png', alt: 'habitat28' },
    { id: '5', src: '/companies/edenla.png', alt: 'edenla' },
    { id: '6', src: '/companies/patriot-storage.webp', alt: 'patriot-storage' },
    { id: '7', src: '/companies/sales-happen-logo.webp', alt: 'sales-happen' }, 
   
  ];

  // Duplicate the logos to create a seamless infinite scroll effect
  const duplicatedLogos = [...logos, ...logos];

  return (

    
    <section className="w-full py-10 pt-18 bg-gray-50 font-inter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Updated Title and added Subtitle */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Companies We&apos;ve Worked With
        </h2>
        <p className="text-base  text-center text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
      

            Over the years, we&apos;ve had the honor of partnering with a wide array of brands, 
                    <br /> —From innovative startups to world-renowned corporations.
        </p>

        {/* The main container for the slider */}
        <div className="relative w-full overflow-hidden whitespace-nowrap py-0">

          <div className="logo-slider-mask">
            <div className="logo-track flex items-center">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`} // Use a combined key for uniqueness
                  // className="flex-shrink-0 w-36 sm:w-48 h-16 sm:h-20 mx-4 sm:mx-6 flex items-center justify-center p-2 bg-white rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:scale-105"
                  className="flex-shrink-0  w-36 sm:w-48 h-16 sm:h-20 md:w-60 md:h-40 mx-4 sm:mx-6 flex items-center justify-center px-2 brounded-lg  transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={300}
                    height={150}
                    className="max-h-full max-w-full object-contain rounded"
                    onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevents infinite loop if fallback also fails
                      target.src = `https://placehold.co/120x60/cccccc/666666?text=Error`; // Fallback image
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesWorked;
