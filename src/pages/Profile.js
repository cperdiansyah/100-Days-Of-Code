import React, { useEffect } from 'react';

export default function Profile() {
  useEffect(() => {
    document.title = 'Profile Page';
  }, []);

  return (
    <section className='section'>
      <h1 className='section-title'>Profile Page</h1>
      <p className='section-description'>
        Halo, selamat datang di halaman profile
      </p>
    </section>
  );
}
