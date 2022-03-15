import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Blog Page';
    const getArticle = async () => {
      const request = await fetch(
        'https://api.spaceflightnewsapi.net/v3/articles/'
      );
      const response = await request.json();

      setArticle(response);
      setLoading(false);
    };

    getArticle();
  }, []);

  return (
    <section className='section'>
      <h1 className='section-title'>Blog Page</h1>

      <p className='section-description'>ini adalah tulisan-tulisan ku</p>
      {loading && <i>Loading article...</i>}
      {!loading && (
        <div style={{ textAlign: 'left' }} className='articles'>
          {article.map((article) => {
            return (
              <article className='article' key={article.id}>
                <h2 className='article-title'>
                  <NavLink to={`/blog/${article.id}`}>{article.title}</NavLink>
                </h2>
                <p className='article-time'>
                  {new Date(article.publishedAt).toLocaleString()}
                </p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
