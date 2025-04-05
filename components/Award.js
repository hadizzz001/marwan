"use client";
import { useEffect, useState } from "react";

const ServicesGrid = () => {
  const [galleries, setGalleries] = useState([]);

  useEffect(() => {
    const fetchGalleries = async () => {
      const res = await fetch("/api/award");
      const data = await res.json();
      setGalleries(data);
    };

    fetchGalleries();
  }, []);

  const containerStyle = {
    width: "100%",
    textAlign: "center",
    padding: "32px 0",
    marginTop: "80px",
  };

  const headingStyle = {
    fontSize: "42px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const imageWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle = {
    width: "80%", // Bigger width
    maxWidth: "800px",
    height: "70vh", // Larger height
    objectFit: "contain",
    backgroundColor: "#f9f9f9", // Optional
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  };

  const linkStyle = {
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "underline",
    fontSize: "16px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>International Award</h2>
      {galleries.length > 0 && (
        <div style={imageWrapperStyle}>
          <img
            src={galleries[0].img[0]}
            alt="Award Gallery"
            style={imageStyle}
          />
          <a
            href="https://internationalcivilitytrainer.com/civility-expert-marwan-asmar-offers-live-civility-trainer-program-in-lebanon/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            https://internationalcivilitytrainer.com/civility-expert-marwan-asmar-offers-live-civility-trainer-program-in-lebanon/
          </a>
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;
