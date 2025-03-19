import React from 'react';

const TitleSection = ({ index, titleRef }) => {
  const titles = [
    "OUR\nAPPROACH",
    "OUR\nTECHNOLOGY",
    "OUR\nSTORY",
    "OUR\nDESIGN TEAM"
  ];

  return (
    <h1
      ref={titleRef}
      className="text-4xl font-medium absolute bottom-0 left-0 text-black z-10 p-10 whitespace-pre-line"
    >
      {titles[index]}
    </h1>
  );
};

export default TitleSection;
