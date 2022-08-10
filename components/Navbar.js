import styles from "../styles/Home.module.sass";
import Link from "next/link";
import { useState, useEffect } from "react";
import { timeTillWedding } from "../utils/utils";



const Navbar = () => {
  const [timeLeft, setTimeLeft] = useState(timeTillWedding);

  useEffect(() => {
    // update countdown state every second
    const timer = setTimeout(() => {
      setTimeLeft(timeTillWedding());
    }, 1000);
    // avoids memory leak if component unmounts before timer is complete
    return () => clearTimeout(timer);
  });

  // console.log("regular nav bar");

  return (
    <>
      {/* <img className={styles.logo} src="/g+e.png" alt="logo"></img> */}
      <img className={styles.banner} src="/banner2.png" alt=""></img>
      <div className={styles.headline_text_container}>
        <div className={styles.headline}>
          <h1>grace & ethan</h1>
          <h3>are getting married</h3>
          {/* <h5>08/13/2022</h5> */}
        </div>
        <div className={styles.countdown_container}>
          <h1>august 13th, 2022</h1>
          <div className={styles.countdown}>
            <div className={styles.countdown_item}>
              <div className={styles.countdown_number} style={{gridColumnStart: 1}}>{timeLeft.days}</div>
              <div className={styles.countdown_text} style={{gridColumnStart: 1}}>days</div>
            </div>
            <div className={styles.countdown_item}>
              <div className={styles.countdown_number} style={{gridColumnStart: 2}}>{timeLeft.hours}</div>
              <div className={styles.countdown_text} style={{gridColumnStart: 2}}>hours</div>
            </div>
            <div className={styles.countdown_item}>
              <div className={styles.countdown_number} style={{gridColumnStart: 3}}>{timeLeft.minutes}</div>
              <div className={styles.countdown_text} style={{gridColumnStart: 3}}>mins</div>
            </div>
          </div> 
        </div>
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
            <Link href="/where_to_stay">where to stay</Link>
          </li>
          <li>
            <Link href="/gallery">gallery</Link>
          </li>
          <li>
            <Link href="http://www.zola.com/registry/g-and-e">registry</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
