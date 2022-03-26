import dynamic from "next/dynamic";
import styles from "../styles/Home.module.sass";
import useWindowDimensions from "../hooks/useWindowDimensions";
import useMediaQuery from "../hooks/useMediaQuery";
import { useEffect, useRef } from "react";

const ImageGrid = (props) => {
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);
  // const { width, height } = useWindowDimensions();
  const isPhone = useMediaQuery("(max-device-width: 415px)");

  let style = {};

  // only add margin on desktop
  if (!isPhone) {
    const offset = 15;
    const margin = 50;
    style["marginLeft"] = margin / 4 - offset;
    style["marginRight"] = margin;
  }

  return (
    <section id={isPhone ? styles.mobilePhotos : styles.photos} style={style}>
      {props.images.map((imageSrc, i) => (
        <GridItem
          key={i}
          src={imageSrc}
          alt={`image ${i}`}
          className={styles.grid_item}
          initialWidth={props.initialWidth}
        />
      ))}
    </section>
  );
};

const GridItem = (props) => {
  let { width, height } = useWindowDimensions();

  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  const isPhone = useMediaQuery("(max-device-width: 415px)");
  let style;
  const decrease = 70;
  const mobileOffset = -70;

  // only dynamically change picture max width on desktop
  if (!isPhone) {
    if (width > 1200) {
      style = {
        maxWidth: width / 5 - decrease * 0.75,
        marginLeft: decrease / 2,
      };
    } else if (width > 1000) {
      style = {
        maxWidth: width / 4 - decrease * 0.85,
        marginLeft: decrease / 2,
      };
    } else if (width > 800) {
      style = { maxWidth: width / 3 - decrease, marginLeft: decrease / 2 };
    } else if (width > 400) {
      style = { maxWidth: width / 2 - decrease - 30, marginLeft: decrease / 2 };
    }
  } else {
    // use initial viewport width to determine pictures' max width on mobile
    style = { maxWidth: props.initialWidth - 100, marginLeft: mobileOffset };
  }

  return (
    <img
      className={styles.gallery_img}
      style={style}
      src={props.src}
      alt={props.alt}
    ></img>
  );
};

const Gallery = () => {
  const initialWidth = useRef(400);
  useEffect(() => {
    const isPhone = window.innerWidth <= 415;
    initialWidth.current = window.innerWidth;
    console.log(
      `is this a phone? ${isPhone}. Current width: ${initialWidth.current}`
    );
  }, []); // <-- empty array means 'run once'

  const images = [
    "bees.jpg",
    "big-tree.jpg",
    "ring_a_ding.jpg",
    "cashew_portrait.jpg",
    "on_blanket.jpg",
    "arboretum.jpg",
    "kissing.jpg",
    "bench.jpg",
    "bridge.jpg",
    "champagne.jpg",
    "mutts.jpg",
    "east.jpg",
    "cashew_shirt.jpg",
    "graduate.jpg",
    "florida.jpg",
    "couch_puppy.jpg",
    "formal.jpg",
    "cashew_hanger.jpg",
    "photo_wall.jpg",
    "nashville_dp.jpg",
    "skiing.jpg",
    "telluride.jpg",
    "waterfall.jpg",
    "yellowstone.jpg",
    "cashew_hat.jpg",
  ];
  return (
    <div className={styles.grid_container}>
      {/* <main className={styles.main}> */}
      <ImageGrid images={images} initialWidth={initialWidth.current} />
      {/* </main> */}
    </div>
  );
};

/*
  export Gallery dynanimically without server-side rendering to avoid window not
  defined error on page reload
*/
export default dynamic(() => Promise.resolve(Gallery), {
  ssr: false,
});
