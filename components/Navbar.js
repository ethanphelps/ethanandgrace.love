import styles from "../styles/Home.module.sass";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* <img className={styles.logo} src="/g+e.png" alt="logo"></img> */}
      <img className={styles.banner} src="/banner2.png" alt=""></img>
      <div className={styles.headline}>
        <h1>grace & ethan</h1>
        <h4>are getting married</h4>
        <h5>08/13/2022</h5>
      </div>
      <nav className={styles.nav}>
        <ul className={styles.nav_links}>
          <li>
            <Link href="/">details</Link>
          </li>
          <li>
            <Link href="/our_story">our story</Link>
          </li>
          <li>
            <Link href="/registry">registry</Link>
          </li>
          <li>
            <Link href="/where_to_stay">where to stay</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
