import React from 'react';

const TextSection = ({ index, textRef }) => {
  return (
    <div className="absolute inset-0 bg-white">
      {/* Logo for the first section */}
      {index === 0 && (
        <div ref={textRef} className="absolute top-4 left-4 text-3xl font-normal text-black z-20 p-2">
          <h1>Visionary</h1>
        </div>
      )}

      {/* Tagline for the second section */}
      {index === 1 && (
        <div ref={textRef} className="absolute top-4 left-4 font-normal text-black z-20 p-2">
          <p className="text-xl w-2/3 text-center">Where Form and Function Unite</p>
        </div>
      )}

      {/* Section title */}
      <h1 ref={textRef} className="text-4xl font-medium absolute bottom-0 left-0 text-black z-10 p-10">
        {index === 0 ? <>OUR <br /> APPROACH</>
          : index === 1 ? <>OUR <br /> TECHNOLOGY</>
            : index === 2 ? <>OUR <br /> STORY</>
              : <>OUR <br /> DESIGN TEAM</>}
      </h1>
    </div>
  );
};

export default TextSection;
