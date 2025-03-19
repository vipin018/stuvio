import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Cursor from './Components/Cursor';

const images = [
  "https://images.unsplash.com/photo-1653971858418-e445eb369681?q=80&w=1932&auto=format&fit=crop",
  "https://plus.unsplash.com/premium_photo-1680224806260-82fbaeb52645?q=80&w=1930&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519643225200-94e79e383724?q=80&w=2076&auto=format&fit=crop"
];

const App = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);

  const handleHover = (index, isHovering) => {
    gsap.to(imageRefs.current[index], {
      y: isHovering ? "0%" : "100%",
      opacity: isHovering ? 1 : 0,
      duration: 0.75,
      ease: "power1.inOut"
    });
  };

  useEffect(() => {
    gsap.fromTo(textRefs.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: "power2.out" }
    );
  }, []);

  return (
    <>
      <Cursor />
      <div className="flex w-full h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-1/4 overflow-hidden border-r-2 border-gray-200"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
          >
            <div className="absolute inset-0 bg-white">
              {index === 0 && (
                <div ref={(el) => textRefs.current.push(el)} className="absolute top-4 left-4 text-3xl font-normal text-black z-20 p-2">
                  <h1>Visionary</h1>
                </div>
              )}
              {index === 1 && (
                <div ref={(el) => textRefs.current.push(el)} className="absolute top-4 left-4 font-normal text-black z-20 p-2">
                  <p className='text-xl w-2/3 text-center'>Where Form and Function Unite</p>
                </div>
              )}
             
              <h1 ref={(el) => textRefs.current.push(el)} className='text-4xl font-medium absolute bottom-0 left-0 text-black z-10 p-10'>
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
    </>
  );
};

export default App;
