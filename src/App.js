import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className='App'>
      <div className='brand'>Website Chandra</div>
      <nav className='nav'>
        <NavLink className='nav-item' to='/'>Home</NavLink>

        <NavLink className='nav-item' to='/profile'>Profile</NavLink>

        <NavLink className='nav-item' to='/blog'>Blog</NavLink>

        <NavLink className='nav-item' to='/contact'>Contact</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='profile' element={<Profile />}></Route>
        <Route path='blog' element={<Blog />}></Route>
        <Route path='blog/:id' element={<BlogDetail />}></Route>
        <Route path='contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
