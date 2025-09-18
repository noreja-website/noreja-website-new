import React from 'react';

const LogoBanner: React.FC = () => {
  // Company logos data - using placeholder for now, can be replaced with actual logos
  const logos = [
    { name: 'Microsoft', logo: '/placeholder.svg' },
    { name: 'Salesforce', logo: '/placeholder.svg' },
    { name: 'AWS', logo: '/placeholder.svg' },
    { name: 'Google Cloud', logo: '/placeholder.svg' },
    { name: 'SAP', logo: '/placeholder.svg' },
    { name: 'Oracle', logo: '/placeholder.svg' },
    { name: 'IBM', logo: '/placeholder.svg' },
    { name: 'Vienesse', logo: '/src/assets/partners/partners_white/vienesse_logo_white.svg' },
    { name: 'BOC', logo: '/src/assets/partners/partners_white/BOC-logo-white.png' },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="relative overflow-hidden py-8">
      <div className="flex animate-scroll">
        {duplicatedLogos.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
          >
            <div className="relative w-20 h-12 flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity duration-300">
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="max-h-8 max-w-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-background/20 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-background/20 to-transparent pointer-events-none" />
    </div>
  );
};

export default LogoBanner;
