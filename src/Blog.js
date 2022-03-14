import { NavLink } from 'react-router-dom';

export default function Blog() {
  return (
    <>
      <h1>Halaman Blog</h1>
      <ul>
        <li>
          <NavLink to='artikel-1'>Artikel 1</NavLink>
        </li>
        <li>
          <NavLink to='artikel-2'>Artikel 2</NavLink>
        </li>
        <li>
          <NavLink to='artikel-3'>Artikel 3</NavLink>
        </li>
      </ul>
    </>
  );
}
