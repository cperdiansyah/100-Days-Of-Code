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
      <nav>
        <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/profile'>Profile</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
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
