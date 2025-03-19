import React from 'react';

const TextSection = ({ index, textRef }) => {
  const content = [
    "Visionary",
    "Where Form and Function Unite"
  ];

  return index < 2 ? (
    <div
      ref={textRef}
      className="absolute top-4 left-4 text-3xl font-normal text-black z-20 p-2"
    >
      {index === 0 ? <h1>{content[0]}</h1> : <p className="text-xl w-2/3 text-center">{content[1]}</p>}
    </div>
  ) : null;
};

export default TextSection;
