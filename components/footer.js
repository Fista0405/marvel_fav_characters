import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.info}>
        <Image
          className={styles.image}
          src="/../public/marvel-m.png"
          alt="Marvel Letter M Logo"
          width={50}
          height={50}
        />
        <div>Social Network Grid</div>
      </div>
      <div className={styles.links}>
        <ul className={styles.list}>
          <li>Terms of Use</li>
          <li>Privacy Policy</li>
          <li>License Agreement</li>
          <li>Marvel Insider Terms</li>
          <li>Copyrigh 2023 MARVEL</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
