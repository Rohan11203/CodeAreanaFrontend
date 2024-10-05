import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Code, Trophy, Users, Info, User } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <nav className='navbar bg-slate-900 p-4 border-b-2 border-slate-800'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='logo'>
          <NavLink to='/' className='navbar-brand text-white text-xl font-bold'>
            <span>⚡ CodeArena</span>
          </NavLink>
        </div>
        <div className='nav-links flex space-x-4'>
          <NavLink to='/' className='navbar-link text-white flex items-center'>
            <Home className="mr-2" size={18} />
            Home
          </NavLink>
          <NavLink to='/challenges' className='navbar-link text-white flex items-center'>
            <Code className="mr-2" size={18} />
            Challenges
          </NavLink>
          <NavLink to='/leaderboard' className='navbar-link text-white flex items-center'>
            <Trophy className="mr-2" size={18} />
            Leaderboard
          </NavLink>
          <NavLink to='/community' className='navbar-link text-white flex items-center'>
            <Users className="mr-2" size={18} />
            Community
          </NavLink>
          <NavLink to='/about' className='navbar-link text-white flex items-center'>
            <Info className="mr-2" size={18} />
            About
          </NavLink>
        </div>
        <div className='auth-links'>
          {isAuth ? (
            <NavLink to='/dashboard' className='navbar-link text-white flex items-center'>
              <User className="mr-2" size={18} />
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='navbar-link text-white mr-4'>
                Login
              </NavLink>
              <NavLink to='/register' className='navbar-link text-white'>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;