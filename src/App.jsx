import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Cursor from './Components/Cursor';
import ImageSection from './Components/ImageSection';
import TextSection from './Components/TextSection';
import TitleSection from './Components/TitleSection';

const images = [
  "https://images.unsplash.com/photo-1653971858418-e445eb369681?q=80&w=1932&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486946255434-2466348c2166?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1606744837616-56c9a5c6a6eb?q=80&w=1935&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519643225200-94e79e383724?q=80&w=2076&auto=format&fit=crop"
];

const App = () => {
  const containerRef = useRef(null);
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const titleRefs = useRef([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleHover = (index, isHovering) => {
    if (expandedIndex !== null) return;

    gsap.to(imageRefs.current[index], {
      y: isHovering ? "0%" : "100%",
      opacity: isHovering ? 1 : 0,
      duration: 0.85,
      ease: "sine.inOut"
    });

    gsap.to(titleRefs.current[index], {
      y: isHovering ? -10 : 0,
      color: isHovering ? "transparent" : "#333",
      duration: 0.6,
      ease: "sine.inOut"
    });

    gsap.to(textRefs.current[index], {
      color: isHovering ? "#fff" : "#333",
      duration: 0.6,
      ease: "sine.inOut"
    });
  };

  const handleClick = (index) => {
    const image = imageRefs.current[index];
    const section = containerRef.current.children[index];

    if (expandedIndex === index) {
      // Collapse Animation
      gsap.to(image, {
        scale: 1,
        x: 0,
        y: 0,
        duration: 1,
        ease: "power3.inOut"
      });
      gsap.to(section, {
        zIndex: 1,
        duration: 0.5
      });
      setExpandedIndex(null);
    } else {
      // Expand Animation
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const rect = section.getBoundingClientRect();

      gsap.to(section, {
        scale: Math.max(viewportWidth / rect.width, viewportHeight / rect.height),
        x: -rect.left + viewportWidth / 2 - rect.width / 2,
        y: -rect.top + viewportHeight / 2 - rect.height / 2,
        duration: 1,
        ease: "power3.inOut"
      });
      gsap.to(image, {
        zIndex: 10,
        duration: 0.5,
        ease: "power3.inOut",
        obj
      });
      setExpandedIndex(index);
    }
  };

  useEffect(() => {
    gsap.set(imageRefs.current, { y: "100%", opacity: 0 });

    const masterTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    masterTl.fromTo(
      containerRef.current.children,
      { opacity: 0, x: 20 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.15 }
    );

    masterTl.fromTo(
      textRefs.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      "-=0.5"
    );

    masterTl.fromTo(
      titleRefs.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.25 },
      "-=0.7"
    );

    return () => masterTl.kill();
  }, []);

  return (
    <>
      <Cursor />
      <div ref={containerRef} className="flex w-full h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-1/4 overflow-hidden border-r-2 border-gray-200 transition-all duration-500"
            onMouseEnter={() => handleHover(index, true)}
            onMouseLeave={() => handleHover(index, false)}
            onClick={() => handleClick(index)}
          >
            <TextSection index={index} textRef={(el) => textRefs.current[index] = el} />
            <TitleSection index={index} titleRef={(el) => titleRefs.current[index] = el} />
            <ImageSection src={src} imgRef={(el) => (imageRefs.current[index] = el)} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;