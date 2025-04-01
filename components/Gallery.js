"use client"; 
import Image from "next/image";

const Children = [
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/m5zpg0xosfvkzolyj3t2.png" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/x79qeweyp1iwnigaroih.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/nlcpq1iawh4tpf4szkfl.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/ukcxn9hjhuswwl6zasnx.jpg" },
];

const CorporationTraining = [
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/m5zpg0xosfvkzolyj3t2.png" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/x79qeweyp1iwnigaroih.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/nlcpq1iawh4tpf4szkfl.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/ukcxn9hjhuswwl6zasnx.jpg" },
];

const EGovTraining = [
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/m5zpg0xosfvkzolyj3t2.png" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164125/x79qeweyp1iwnigaroih.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/nlcpq1iawh4tpf4szkfl.jpg" },
  { img: "https://res.cloudinary.com/dea3r5dn7/image/upload/v1743164124/ukcxn9hjhuswwl6zasnx.jpg" },
];

const ServicesGrid = () => {
  return (
    <>
      <div className="w-full text-center py-8 mt-20 ">
        <h2 className="text-[38px] font-bold text-center mb-10">Children and youth gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {Children.map((service, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={service.img}
                alt={`Service ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-[33vh] md:h-[50vh] object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Corporation Training Gallery */}
      <div className="w-full text-center py-8 mt-20 ">
        <h2 className="text-[38px] font-bold text-center mb-10">Corporation Training Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {CorporationTraining.map((service, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={service.img}
                alt={`Corporation Training ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-[33vh] md:h-[50vh] object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* E-Government Training Gallery */}
      <div className="w-full text-center py-8 mt-20 ">
        <h2 className="text-[38px] font-bold text-center mb-10">E-Government Training Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 w-full">
          {EGovTraining.map((service, index) => (
            <div key={index} className="relative">
              {/* Image */}
              <img
                src={service.img}
                alt={`E-Gov Training ${index + 1}`}
                width={500}
                height={300}
                className="w-full h-[33vh] md:h-[50vh] object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesGrid;
