import React from 'react';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Home Page';
  }, []);
  return (
    <section className='section'>
      <h1 className='section-title'>Selamat Datang di website ku</h1>
      <p className='section-description'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum maiores
        molestias assumenda totam saepe quo pariatur perspiciatis voluptates
        vero quam eligendi, ab a porro optio incidunt dicta distinctio quis
        fugit!
      </p>
    </section>
  );
}
