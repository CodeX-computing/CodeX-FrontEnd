import Link from 'next/link'
import Styles from '../styles/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={Styles.navbar}>
      <img src="/logo.png" alt="CodeX computing" width='200px' />
      <ul className={Styles.navbar_items}>
        <li className={Styles.navbar_item}>
          <Link href="/">
            <a className={Styles.navbar_link}>Home</a>
          </Link>
        </li>
        <li className={Styles.navbar_item}>
          <Link href="/about">
            <a className={Styles.navbar_link}>About</a>
          </Link>
        </li>
        <li className={Styles.navbar_item}>
          <Link href="/services">
            <a className={Styles.navbar_link}>Services</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
