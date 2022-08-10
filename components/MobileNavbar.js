import styles from "../styles/Home.module.sass";
import Link from "next/link";
import { useState, useEffect } from "react";
import { timeTillWedding } from "../utils/utils";


const MobileNavbar = () => {
  const [timeLeft, setTimeLeft] = useState(timeTillWedding);

  useEffect(() => {
    // update countdown state every second
    const timer = setTimeout(() => {
      setTimeLeft(timeTillWedding());
    }, 1000);
    // avoids memory leak if component unmounts before timer is complete
    return () => clearTimeout(timer);
  });

  // console.log("mobile nav bar");

  return (
    <>
      {/* <img className={styles.logo} src="/g+e.png" alt="logo"></img> */}
      <div className={styles.mobile_headline_container}>
        <div className={styles.mobile_headline}>
          <h1>grace & ethan</h1>
          <h3>are getting married</h3>
          {/* <h5>08/13/2022</h5> */}
        </div>
      </div>

      <img className={styles.mobile_banner} src="/house_watercolor.png" alt=""></img>
      <div className={styles.countdown_container}>
        <h1>august 13th, 2022</h1>
        <div className={styles.countdown}>
          <div className={styles.countdown_item}>
            <div
              className={styles.countdown_number}
              style={{ gridColumnStart: 1 }}
            >
              {timeLeft.days}
            </div>
            <div
              className={styles.countdown_text}
              style={{ gridColumnStart: 1 }}
            >
              days
            </div>
          </div>
          <div className={styles.countdown_item}>
            <div
              className={styles.countdown_number}
              style={{ gridColumnStart: 2 }}
            >
              {timeLeft.hours}
            </div>
            <div
              className={styles.countdown_text}
              style={{ gridColumnStart: 2 }}
            >
              hours
            </div>
          </div>
          <div className={styles.countdown_item}>
            <div
              className={styles.countdown_number}
              style={{ gridColumnStart: 3 }}
            >
              {timeLeft.minutes}
            </div>
            <div
              className={styles.countdown_text}
              style={{ gridColumnStart: 3 }}
            >
              mins
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
