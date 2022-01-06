import styles from "../styles/Home.module.sass";
import Link from "next/link";
import { useState, useEffect } from "react";

const weddingDate = new Date('August 13, 2022 23:00:00');

// calculate time till the wedding!
const timeTillWedding = () => {
  const totalSeconds = Math.round((weddingDate.getTime() - Date.now()) / 1000);
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = totalHours % 24;
  const minutes = totalMinutes % 60;
  console.log(`${days} days, ${hours} hours, ${minutes} minutes`);

  return { days: days, hours: hours, minutes: minutes }
}

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

  return (
    <>
      {/* <img className={styles.logo} src="/g+e.png" alt="logo"></img> */}
      <img className={styles.banner} src="/banner2.png" alt=""></img>
      <div className={styles.headline_text_container}>
        <div className={styles.headline}>
          <h1>grace & ethan</h1>
          <h4>are getting married</h4>
          <h5>08/13/2022</h5>
        </div>
        <div className={styles.countdown_container}>
          <h1>countdown text</h1>
          <div className={styles.countdown}>
            <div className={styles.countdown_number} style={{gridColumnStart: 1}}>{timeLeft.days}</div>
            <div className={styles.countdown_number} style={{gridColumnStart: 2}}>{timeLeft.hours}</div>
            <div className={styles.countdown_number} style={{gridColumnStart: 3}}>{timeLeft.minutes}</div>
            <div className={styles.countdown_text} style={{gridColumnStart: 1}}>days</div>
            <div className={styles.countdown_text} style={{gridColumnStart: 2}}>hours</div>
            <div className={styles.countdown_text} style={{gridColumnStart: 3}}>min</div>
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
            <Link href="http://www.zola.com/registry/g-and-e">registry</Link>
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
