import react from 'react';
import Styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <img src="/logo.png" alt="CodeX computing" width='200px' />
      <ul className={Styles.navbar_items}>
        <li className={Styles.navbar_item}>
          <a className={Styles.navbar_link} href="#">Home</a>
        </li>
        <li className={Styles.navbar_item}>
          <a className={Styles.navbar_link} href="#">About</a>
        </li>
        <li className={Styles.navbar_item}>
          <a className={Styles.navbar_link} href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
