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
    <section className="pt-10 overflow-hidden ">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
          <p className='max-w-lg mt-3 text-l leading-relaxed text-[#222222] ' dangerouslySetInnerHTML={{ __html: data?.desc }} />
          </div>
          <div className="relative" >
           
            {data && data.img && data.img[0] && (
              <img
                className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                src={data.img[0]} // Dynamically set the fetched image
                alt="Fetched Content"
                style={{marginTop:"5em"}}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
