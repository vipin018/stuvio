import React from 'react';

const ImageSection = ({ src, imgRef }) => {
  return (
    <img
      ref={imgRef}
      src={src}
      alt="Nature landscape"
      className="w-full h-full object-cover"
      style={{ transform: 'translateY(100%)', opacity: 0 }}
    />
  );
};

export default ImageSection;
