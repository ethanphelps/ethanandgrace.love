import styles from "../styles/Home.module.sass";

const Hotel = (props) => {
  return (
    <div className={styles.hotel_section}>
      <h3 className={styles.subsection_header}>
        {props.name}
      </h3>
      <p>
        {props.description}
      </p>
      <a href={props.link} className={styles.hotel_button}>website</a>
    </div>
  );
}


export default function WhereToStay() {
  return (
    <div className={styles.desktop_hotels_container}>
      <div className={styles.hotels_container}>
        <h3 className={styles.header}>where to stay</h3>
        <Hotel 
          name="hotel carmichael" 
          description="a classy botique hotel located in the heart of carmel, indiana. 25 minutes from the williams residence."
          link="https://www.hotelcarmichael.com"
        />
        <Hotel 
          name="brick street inn" 
          description="a quaint bed-and-breakfast located in downtown zionsville on main street. only has eight rooms total. 5 minutes from the williams residence"
          link="https://brickstreetinn.com"
        />
        <Hotel 
          name="home2 suites" 
          description="a convenient spot to stay in whitestown about 10 minutes from the williams residence"
          link="https://www.hilton.com/en/hotels/indetht-home2-suites-whitestown-indianapolis-nw/"
        />
      </div>
    </div>
    );
}