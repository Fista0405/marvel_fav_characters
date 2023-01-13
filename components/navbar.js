import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <Image
          className={styles.image}
          src="/../public/marvel.png"
          alt="Marvel Logo"
          width={130}
          height={52}
        />
      </Link>

      <Link className={styles.link} href="/about">
        About
      </Link>
    </nav>
  );
};

export default Navbar;
