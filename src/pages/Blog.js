import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Blog() {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
    <section>
      <h1>Blog Page</h1>

      <p>ini adalah tulisan-tulisan ku</p>
      {loading && <i>Loading article...</i>}
      {!loading && (
        <div style={{ textAlign: 'left' }}>
          {article.map((article) => {
            return (
              <article key={article.id}>
                <h2>
                  <NavLink to={`/blog/${article.id}`}>{article.title}</NavLink>
                </h2>
                <p>{new Date(article.publishedAt).toLocaleString()}</p>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
