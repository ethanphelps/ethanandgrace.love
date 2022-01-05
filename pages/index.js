import styles from "../styles/Home.module.sass";

export default function Home() {
  return (
      <main className={styles.main}>
        <section className={styles.row}>
          <img className={styles.watercolor} src="/house_watercolor.png" alt="Wedding Venue"></img>
          <div className={styles.schedule}>
            <h3 className={styles.header}>schedule of events</h3>
            <b>ceremony</b>
            <p>
              saturday, the 13th of august <br/>
              5 o'clock in the evening <br/>
              williams' home <br/>
            </p>
            <b>reception</b>
            <p>
              saturday, the 13th of august <br/>
              6 o'clock in the evening <br/>
              williams' home <br/>
            </p>
            <div>
              <img className={styles.address_box} src="/address_box.png" alt=""></img>
              <p className={styles.address}>
                <i>
                  8855 hunt club road <br/>
                  Zionsville, IN <br/>
                  460777 <br/>
                </i>
              </p>
            </div>
            
          </div>
        </section>
        <section className={styles.row}>
          <div className={styles.suggested_attire}>
              <h3 className={styles.header}>suggested attire</h3>
              <p>black tie optional</p>
              <p>
                <i>
                please note that both the <br/>
                ceremony and reception will <br/>
                be outdoors on grass so for <br/>
                your comofort, stiletto heels are <br/>
                not recommended
                </i>
              </p>
          </div>
          <img className={styles.bees} src="/bees.jpg" alt="Tree"></img>
        </section>

      </main>
  );
}
