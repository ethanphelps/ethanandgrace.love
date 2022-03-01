import styles from "../styles/Home.module.sass";
import useMediaQuery from "../hooks/useMediaQuery";
import Gallery from "../pages/gallery";

export default function Home() {
  const isPhone = useMediaQuery('(max-width: 415px)');

  return (
      <main className={styles.main}>
        <section className={styles.row}>
          {isPhone ? null : <img className={styles.watercolor} src="/house_watercolor.png" alt="Wedding Venue"></img>}
          <div className={styles.schedule}>
            <h3 className={styles.header}>schedule of events</h3>
            <b>ceremony</b>
            <p>
              saturday, the 13th of august <br/>
              5 o&apos;clock in the evening <br/>
              williams&apos; home <br/>
            </p>
            <b>reception</b>
            <p>
              saturday, the 13th of august <br/>
              6 o&apos;clock in the evening <br/>
              williams&apos; home <br/>
            </p>
            <div>
              <img className={styles.address_box} src="/address_box.png" alt=""></img>
              <p className={styles.address}>
                <i>
                  8855 hunt club road <br/>
                  Zionsville, IN <br/>
                  46077 <br/>
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
                your comfort, stiletto heels are <br/>
                not recommended
                </i>
              </p>
          </div>
          {isPhone ? null : <img className={styles.bees} src="/bees.jpg" alt="Tree"></img>}
        </section>

        {!isPhone ? null : 
          <div className={styles.mobile_scroll_sections}>
            <section className={styles.row}>
              <div className={styles.subsection}>
                <h3 className={styles.header}>our story</h3>
                <h3 className={styles.subsection_header}>how we met</h3>
                <p>
                  on a trip to gulf shores, alabama, grace commented on the music ethan was playing. we struck up a conversation that lasted for hours. the rest is history!
                </p>
                <h3 className={styles.subsection_header}>how he asked</h3>
                <p>
                  on our three year anniversary, april 15th 2021, we went to arrington vineyard and ethan surprised grace with a gift that had a ring inside! to her surprise, our parents came walking down the hill and a weekend of celebration ensued
                </p>
                <h3 className={styles.subsection_header}>favorite memories</h3>
                <p style={{minWidth: '400px', transform: 'translate(-18%, 0)'}}>
                  walking the alabama beach the night we met <br/>
                  skiing together <br/>
                  tailgate pizza on demonbreun street <br/>
                  being concert buddies <br/>
                  getting our puppy cashew who we love so much<br/>
                  </p>
              </div>
            </section>

            <section className={styles.row}>
              <div className={styles.subsection}>
                <h3 className={styles.header}>where to stay</h3>
                <h3 className={styles.subsection_header}>
                  <a href="https://www.hotelcarmichael.com" className={styles.hotel_links}>hotel carmichael</a>
                </h3>
                <p>
                  a classy botique hotel located in the heart of carmel, indiana. 25 minutes from the williams residence.
                </p>
                <button className={styles.hotel_button}>website</button>
                <h3 className={styles.subsection_header}>
                  <a href="https://brickstreetinn.com" className={styles.hotel_links}>brick street inn</a>
                </h3>
                <p>
                  a quaint bed-and-breakfast located in downtown zionsville on main street. only has eight rooms total. 5 minutes from the williams residence
                </p>
                <button className={styles.hotel_button}>website</button>
              </div>
            </section>

            <section className={styles.subsection}>
              <div className={styles.gallery}>
               <h3 className={styles.header}>gallery</h3>
               <Gallery/>
              </div>
            </section>
          </div>
        }

      </main>
  );
}
