import styles from "../styles/Home.module.sass";
import useMediaQuery from "../hooks/useMediaQuery";

export default function OurStory() {
  const isPhone = useMediaQuery('(max-device-width: 415px)');

  return(
    <main className={styles.main}>
      <section className={styles.row} style={isPhone ? null : {transform: 'translate(100px,0)'}}>
        {isPhone ? null : 
          <div className={styles.story_pictures}>
            <img className={styles.on_blanket} src="/on_blanket.jpg" alt=""></img>
            <img className={styles.kissing} src="/kissing.jpg" alt=""></img>
            <img className={styles.ring_pic} src="/ring_a_ding.jpg" alt=""></img>
          </div> 
        }
        <div className={styles.story}>
          {!isPhone ? null : <h3 className={styles.header}>our story</h3> }
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
    </main>
  );
}