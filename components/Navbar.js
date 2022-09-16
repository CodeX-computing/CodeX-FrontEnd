import react from 'react';
import Styles from '../assets/css/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <img src="/images/logo.png" alt="CodeX computing" width="200px" />
      <ul className="flex flex-col">
        <li className={Styles.home_link}>
          <a className="hero_title text-xl font-bold" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="hero_title text-xl font-bold ml-5" href="#services">
            Services
          </a>
        </li>
        <li>
          <a className="hero_title text-xl font-bold ml-5" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hero_title text-xl font-bold ml-5" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
