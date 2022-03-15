import React from 'react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact Page';
  }, []);
  return (
    <section className='section'>
      <h1 className='section-title'>Contact</h1>
      <p className='section-description'>
        Kamu dapat menghubungiku dibawah ini
      </p>

      <ul>
        <li>WA : 01215450</li>
        <li>chandraperdiansyah@gmail.com</li>
      </ul>

      <p>Atau di sosmed</p>
      <ul>
        <li>Facebook :</li>
      </ul>
    </section>
  );
}
