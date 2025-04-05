"use client";
import { useEffect, useState } from "react";

const ServicesGrid = () => {
  const [galleries, setGalleries] = useState({
    children: [],
    corporationTraining: [],
    egovTraining: [],
  });

  const [zoomImage, setZoomImage] = useState(null); // holds the selected image URL

  useEffect(() => {
    const fetchGalleries = async () => {
      const res = await fetch("/api/gallery");
      const data = await res.json();

      const categorizedGalleries = data.reduce(
        (acc, gallery) => {
          if (gallery.type === "Children and youth") {
            acc.children.push(gallery);
          } else if (gallery.type === "Corporate Training") {
            acc.corporationTraining.push(gallery);
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
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "16px",
    width: "100%",
  };

  const containerStyle = {
    width: "100%",
    textAlign: "center",
    padding: "32px 0", 
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
    cursor: "pointer",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalImageStyle = {
    maxWidth: "90vw",
    maxHeight: "90vh",
    borderRadius: "8px",
  };

  return (
    <>
      {/* Corporation Training Gallery */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Corporate Training Gallery</h2>
        <div style={gridStyle}>
          {galleries.corporationTraining.map((gallery) => (
            <div key={gallery._id} style={{ display: "contents" }}>
              {gallery.img.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Corporate Training ${idx + 1}`}
                  style={imageStyle}
                  onClick={() => setZoomImage(imageUrl)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Children and Youth Gallery */}
      <div style={containerStyle}>
        <h2 style={headingStyle}>Children and Youth Training Gallery</h2>
        <div style={gridStyle}>
          {galleries.children.map((gallery) => (
            <div key={gallery._id} style={{ display: "contents" }}>
              {gallery.img.map((imageUrl, idx) => (
                <img
                  key={idx}
                  src={imageUrl}
                  alt={`Children Gallery ${idx + 1}`}
                  style={imageStyle}
                  onClick={() => setZoomImage(imageUrl)}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Zoom Image Modal */}
      {zoomImage && (
        <div style={modalOverlayStyle} onClick={() => setZoomImage(null)}>
          <img
            src={zoomImage}
            alt="Zoomed"
            style={modalImageStyle}
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking on the image
          />
        </div>
      )}
    </>
  );
};

export default ServicesGrid;
