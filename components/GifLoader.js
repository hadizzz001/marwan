"use client";

import { useState, useEffect } from 'react';

const ImgLoader = () => {
  const [showImage, setShowImage] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setFadeOut(true);  // Trigger fade-out
      setTimeout(() => {
        setShowImage(false);  // Remove the image after fade-out is done
      }, 1000);  // Wait for the fade-out transition (1 second)
    }, 2000);

    // Cleanup the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      {showImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: '9999999999',
            opacity: fadeOut ? 0 : 1, // Apply fade-out opacity when needed
            transition: 'opacity 1s ease-out', // Transition effect
          }}
        >
          <div
            style={{
              width: '10em', // Increased width
              height: '10em', // Increased height (optional)
              zIndex: '9999999999',
            }}
          >
            <img
              src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743077533/ltbd3bmbq7lecu2pag7b.png"
              alt="Loading"
              style={{
                width: '100%', // Ensure the image scales to fill the container
                height: '100%', // Ensure the image scales to fill the container
                objectFit: 'contain', // Maintain aspect ratio
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImgLoader;
