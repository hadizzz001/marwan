import React, { useEffect, useState } from 'react';

const Article = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    // Fetching data from the API
    fetch('api/article')
      .then(response => response.json())
      .then(data => {
        // Assuming the API returns an array of articles, take the first 6
        setArticles(data.slice(0, 6)); 
      })
      .catch(error => {
        console.error('Error fetching articles:', error);
      });
  }, []);
  
  return (
    <section className="pt-10 lg:px-20 md:px-10 px-10 text-blue-950 mt-20">
      <h2 className="text-[38px] font-bold text-center">My Articles</h2>
      
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 pt-9">
        {articles.map((article, index) => (
          <a key={index} target="_blank" href={article.desc}>
            <div className="text-center">
              <img
                src={article.img[0]}
                alt={article.title}
                className="mx-auto w-80 h-48 object-cover rounded-lg"
              />
              <h3 className="font-medium text-xl mt-4">{article.title}</h3>
            </div>
          </a>
        ))}
      </div>
    
      <div className="flex justify-center mt-10">
        <button
          className="bg-[#000768] text-white px-6 py-3 rounded-full text-large font-large"
          onClick={() => window.location.href = '/article'}
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Article;
