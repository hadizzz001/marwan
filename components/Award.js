"use client";
import { useEffect, useState } from "react";

const ServicesGrid = () => {
  const [galleries, setGalleries] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    cursor: "pointer",
  };

  const imageStyle = {
    width: "100%",
    maxWidth: "800px", 
    objectFit: "contain",
    backgroundColor: "#f9f9f9", 
    transition: "transform 0.3s ease",
  };

  const linkStyle = {
    marginTop: "20px",
    color: "#0070f3",
    textDecoration: "underline",
    fontSize: "16px",
  };

  const modalOverlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  };

  const modalImageStyle = {
    maxWidth: "90%",
    maxHeight: "90%",
    borderRadius: "12px",
  };

  const closeButtonStyle = {
    position: "absolute",
    top: 20,
    right: 30,
    color: "#fff",
    fontSize: "32px",
    cursor: "pointer",
    fontWeight: "bold",
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
            onClick={() => setIsModalOpen(true)}
          />
          <a
            href="https://internationalcivilitytrainer.com/civility-expert-marwan-asmar-offers-live-civility-trainer-program-in-lebanon/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            https://internationalcivilitytrainer.com/...
          </a>
        </div>
      )}

      {/* Zoom Image Modal */}
      {isModalOpen && (
        <div style={modalOverlayStyle} onClick={() => setIsModalOpen(false)}>
          <span style={closeButtonStyle}>&times;</span>
          <img
            src={galleries[0].img[0]}
            alt="Zoomed Award"
            style={modalImageStyle}
          />
        </div>
      )}
    </div>
  );
};

export default ServicesGrid;
