import React from 'react';
import nexigoLogo from '@/assets/partners/partners_white/nexigo_white.png';
import miragonLogo from '@/assets/partners/partners_white/miragon_white.png';
import fortlaneLogo from '@/assets/partners/partners_white/fortlane_white.png';
import novofactumLogo from '@/assets/partners/partners_white/novofactum_white.png';
import schleswigerLogo from '@/assets/partners/partners_white/schleswiger_white.png';
import waitsLogo from '@/assets/partners/partners_white/waits_white.png';
import vienesseLogo from '@/assets/partners/partners_white/vienesse_logo_white.svg';
import bocLogo from '@/assets/partners/partners_white/BOC-logo-white.png';

const LogoBanner: React.FC = () => {
  // Company logos data - using imported assets for proper Vite handling
  const logos = [
    { name: 'Nexigo', logo: nexigoLogo },
    { name: 'Miragon', logo: miragonLogo },
    { name: 'Fortlane', logo: fortlaneLogo },
    { name: 'Google Cloud', logo: novofactumLogo },
    { name: 'Schleswiger', logo: schleswigerLogo },
    { name: 'WAITS', logo: waitsLogo },
    { name: 'Vienesse', logo: vienesseLogo },
    { name: 'BOC', logo: bocLogo },
  ];

  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

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
                className="max-h-12 max-w-20 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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
