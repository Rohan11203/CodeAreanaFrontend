import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/navbar.css';

const Navbar = () => {
  const { isAuth } = useSelector((state) => state.auth);

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='logo'>
          <NavLink to='/' className='navbar-brand'>
            <span>⚡ CodeArena</span>
          </NavLink>
        </div>
        <div className='nav-links'>
          <NavLink to='/games' className='navbar-link'>
            Games
          </NavLink>
          <NavLink to='/leaderboard' className='navbar-link'>
            Leaderboard
          </NavLink>
          <NavLink to='/about' className='navbar-link'>
            About
          </NavLink>
        </div>
        <div className='auth-links'>
          {isAuth ? (
            <NavLink to='/dashboard' className='navbar-link'>
              Dashboard
            </NavLink>
          ) : (
            <>
              <NavLink to='/login' className='navbar-link'>
                Login
              </NavLink>
              <NavLink to='/register' className='navbar-link'>
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
