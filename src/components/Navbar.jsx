import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Home, Code, Trophy, Users, Info, User,X,Menu } from 'lucide-react';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <nav className='bg-black p-4 border-b-2 border-slate-800'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <NavLink to='/' className='text-white text-xl font-bold flex items-center'>
            <span className='mr-2'>⚡</span>
            <span className='hidden sm:inline'>CodeArena</span>
          </NavLink>
        </div>
        
        {/* Mobile menu button */}
        <button onClick={toggleMenu} className='md:hidden text-white'>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <div className='hidden md:flex space-x-4'>
          <NavLink to='/' className='text-white hover:text-blue-300 flex items-center'>
            <Home className="mr-2" size={18} />
            Home
          </NavLink>
          <NavLink to='/challenges' className='text-white hover:text-blue-300 flex items-center'>
            <Code className="mr-2" size={18} />
            Challenges
          </NavLink>
          <NavLink to='/leaderboard' className='text-white hover:text-blue-300 flex items-center'>
            <Trophy className="mr-2" size={18} />
            Leaderboard
          </NavLink>
        </div>

        {/* Auth Links */}
        <div className='hidden md:flex items-center space-x-4'>
          {isAuth ? (
            <NavLink to='/dashboard' className='text-white hover:text-blue-300 flex items-center'>
              <User className="mr-2" size={18} />
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='text-white hover:text-blue-300 px-3 py-2 rounded-md'>
                Login
              </NavLink>
              <NavLink to='/register' className='bg-blue-300 text-black hover:bg-emerald-200 px-3 py-2 rounded-md transition duration-300'>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className='md:hidden mt-4'>
          <NavLink to='/' className='block text-white py-2 px-4 hover:bg-slate-800' onClick={toggleMenu}>
            <Home className="inline-block mr-2" size={18} />
            Home
          </NavLink>
          <NavLink to='/challenges' className='block text-white py-2 px-4 hover:bg-slate-800' onClick={toggleMenu}>
            <Code className="inline-block mr-2" size={18} />
            Challenges
          </NavLink>
          <NavLink to='/leaderboard' className='block text-white py-2 px-4 hover:bg-slate-800' onClick={toggleMenu}>
            <Trophy className="inline-block mr-2" size={18} />
            Leaderboard
          </NavLink>
          {isAuth ? (
            <NavLink to='/dashboard' className='block text-white py-2 px-4 hover:bg-slate-800' onClick={toggleMenu}>
              <User className="inline-block mr-2" size={18} />
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='block text-white py-2 px-4 hover:bg-slate-800' onClick={toggleMenu}>
                Login
              </NavLink>
              <NavLink to='/register' className='block text-white bg-blue-500 py-2 px-4 hover:bg-blue-600' onClick={toggleMenu}>
                Register
              </NavLink>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;