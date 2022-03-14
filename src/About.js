import { NavLink, Outlet } from 'react-router-dom';

function About() {
  return (
    <>
      <h1>Halaman About</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at
        repellendus optio, inventore dignissimos corporis amet, doloribus atque
        excepturi dolorum, architecto sed quos pariatur aliquid mollitia velit
        possimus dolor. Voluptates.
      </p>
      <ul>
        <li>
          <NavLink to='/about/team'>About Team</NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
}
export default About;
