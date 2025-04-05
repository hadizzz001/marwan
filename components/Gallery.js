"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const ServicesGrid = () => {
  const [galleries, setGalleries] = useState({
    children: [],
    corporationTraining: [],
    egovTraining: [],
  });

  useEffect(() => {
    // Fetch galleries from API
    const fetchGalleries = async () => {
      const res = await fetch("/api/gallery"); // Your API endpoint
      const data = await res.json();

      // Categorize galleries based on their type
      const categorizedGalleries = data.reduce(
        (acc, gallery) => {
          if (gallery.type === "Children and youth") {
            acc.children.push(gallery);
          } else if (gallery.type === "Corporate Training") {
            acc.corporationTraining.push(gallery);
          } else if (gallery.type === "E-Government Training") {
            acc.egovTraining.push(gallery);
          }
          return acc;
        },
        { children: [], corporationTraining: [], egovTraining: [] }
      );
      
      setGalleries(categorizedGalleries);
    };

    fetchGalleries();
  }, []);

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)", // 3 images per row
    gap: "16px", // Space between images
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
    <>
      {/* Children and youth gallery */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Children and Youth Gallery</h2>
        <div style={gridStyle}>
          {galleries.children.map((gallery, index) => (
            <div key={gallery._id} style={{display:'contents'}}>
              {gallery.img.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Children Gallery ${idx + 1}`}
                  width={500}
                  height={300}
                  style={imageStyle}
                  priority
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Corporation Training Gallery */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Corporate Training Gallery</h2>
        <div style={gridStyle}>
          {galleries.corporationTraining.map((gallery, index) => (
            <div key={gallery._id} style={{display:'contents'}}>
              {gallery.img.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Corporate Training ${idx + 1}`}
                  width={500}
                  height={300}
                  style={imageStyle}
                  priority
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* E-Government Training Gallery */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>E-Government Training Gallery</h2>
        <div style={gridStyle}>
          {galleries.egovTraining.map((gallery, index) => (
            <div key={gallery._id} style={{display:'contents'}}>
              {gallery.img.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`E-Gov Training ${idx + 1}`}
                  width={500}
                  height={300}
                  style={imageStyle}
                  priority
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
