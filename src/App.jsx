import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Cursor from './Components/Cursor';
import ImageSection from './Components/ImgSection';
import TextSection from './Components/TextSection';

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
            <TextSection index={index} textRef={(el) => textRefs.current.push(el)} />
            <ImageSection src={src} imgRef={(el) => (imageRefs.current[index] = el)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
