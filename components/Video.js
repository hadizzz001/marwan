import React, { useState, useEffect } from "react";

const VideoGrid = () => {
  const [videos, setVideos] = useState([]);
  
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch("/api/video");
        const data = await response.json();
        setVideos(data);
        
        
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div className="container mx-auto p-6 mt-20">
      <h2 className="text-[38px] font-bold text-center">
        Our <span>Videos</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {videos.map((video) => (
          <video key={video.id} controls className="w-full h-64 rounded-lg shadow-lg">
            <source src={video.img} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
