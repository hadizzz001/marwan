import React from "react";

const videos = [
  { id: 1, url: "https://res.cloudinary.com/dea3r5dn7/video/upload/v1743110723/vgyr7hztx0ea54u5si8p.mp4" },
  { id: 2, url: "https://res.cloudinary.com/dea3r5dn7/video/upload/v1743110745/q6t6ivyh5gs7cltoxeh0.mp4" },
];

const VideoGrid = () => {
  return (
    <div className="container mx-auto p-6 mt-20">
        <h2 className="text-[38px] font-bold text-center">
    Our <span  >Videos</span>
  </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
        {videos.map((video) => (
          <video key={video.id} controls className="w-full h-64 rounded-lg shadow-lg">
            <source src={video.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;
