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
    gridTemplateColumns: "repeat(3, 1fr)", // 3 images per row
    gap: "16px",
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

  const imageStyle = {
    width: "100%",
    height: "33vh",
    objectFit: "cover",
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>International Award</h2>
      <div style={gridStyle}>
        {galleries.map((gallery) => (
          <img
            key={gallery._id}
            src={gallery.img[0]} // Use only the first image
            alt="Award Gallery"
            style={imageStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;
