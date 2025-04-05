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

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "24px",
    width: "100%",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
    padding: "32px 0",
    marginTop: "80px",
  };

  const headingStyle = {
    fontSize: "38px",
    fontWeight: "bold",
    marginBottom: "40px",
  };

  const imageWrapperStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const imageStyle = {
    width: "100%",
    height: "33vh",
    objectFit: "contain", // Show full image without cropping
    backgroundColor: "#f0f0f0", // Optional: light background for contrast
  };

  const linkStyle = {
    marginTop: "12px",
    color: "#0070f3",
    textDecoration: "underline",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>International Award</h2>
      <div style={gridStyle}>
        {galleries.map((gallery) => (
          <div key={gallery._id} style={imageWrapperStyle}>
            <img
              src={gallery.img[0]}
              alt="Award Gallery"
              style={imageStyle}
            />
            <a
              href="https://internationalcivilitytrainer.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              https://internationalcivilitytrainer.com/
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
