import '../styles/Header.css'
import profilePic from '../assets/profile-pic/Profile.png'
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext.jsx';

function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className="header">
      <div className="profile-content">
        <span>
          <img src={profilePic} alt="Profile" />
        </span>
        <h3>Roger Murray</h3>
      </div>
      <div className='nav-icon'>
        <i class={theme === 'light' ? 'bx bx-moon' : 'bx bx-sun'} onClick={toggleTheme}></i>
        <i class='bxr  bx-cog'></i> 
        <i class='bxr  bx-bell-ring'></i> 
      </div>
    </header>
  );
}

export default Header; 
