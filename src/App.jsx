import React, { useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  "https://images.unsplash.com/photo-1526827826797-7b05204a22ef?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?q=80&w=1974&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1631561158446-086cebb5df8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=2127&auto=format&fit=crop"
];

const App = () => {
  const imageRefs = useRef([]);

  const handleHover = (index, isHovering) => {
    gsap.to(imageRefs.current[index], {
      y: isHovering ? "0%" : "100%",
      opacity: isHovering ? 1 : 0,
      duration: 0.75,
      ease: "power1.inOut"
    });
  };

  return (
    <div className="flex w-full h-screen">
      {images.map((src, index) => (
        <div
          key={index}
          className="relative w-1/4 overflow-hidden border-r-2 border-gray-200 "
          onMouseEnter={() => handleHover(index, true)}
          onMouseLeave={() => handleHover(index, false)}
        >
          <div className="absolute inset-0 bg-white">
            {/* Show logo on the top left for the first div */}
            {index === 0 && (
              <div className="absolute top-4 left-4 text-3xl font-normal text-black z-20 p-2">
                <h1>Visionary</h1>
              </div>
            )}
            
            {/* Text for each div with line break */}
            <h1 className='text-4xl font-medium absolute bottom-0 left-0 text-black z-10 p-10'>
              {index === 0 ? <>OUR <br /> APPROACH</> 
              : index === 1 ? <>OUR <br /> TECHNOLOGY</> 
              : index === 2 ? <>OUR <br /> STORY</> 
              : <>OUR <br /> DESIGN TEAM</>}
            </h1>
          </div>
          <img
            ref={(el) => (imageRefs.current[index] = el)}
            src={src}
            alt={`Nature landscape ${index + 1}`}
            className="w-full h-full object-cover"
            style={{ transform: 'translateY(100%)', opacity: 0 }}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
