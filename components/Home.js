import React, { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('api/home');
        const result = await response.json();
        setData(result[0]); // Set the fetched data to the state
        
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="pt-10 overflow-hidden md:pt-0 sm:pt-16 2xl:pt-16 mt-10">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
          <p className='max-w-lg mt-3 text-xl leading-relaxed text-[#222222]  md:mt-8' dangerouslySetInnerHTML={{ __html: data?.desc }} />
          </div>
          <div className="relative">
            {/* Background Image */}
            <img
              className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
              src="https://res.cloudinary.com/dea3r5dn7/image/upload/v1743106550/pgsk9zrfdfm2ilfg3pqh.webp"
              alt="Background"
            />
            {/* Fetched Image */}
            {data && data.img && data.img[0] && (
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={data.img[0]} // Dynamically set the fetched image
                alt="Fetched Content"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
