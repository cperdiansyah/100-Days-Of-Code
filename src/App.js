// import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Home';
import About from './About';
import AboutTeam from './AboutTeam';
import Blog from './Blog';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/blog'>Blog</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}>
          <Route path='team' element={<AboutTeam />} />
        </Route>
        <Route path='blog' element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
