import Navbar from "./Navbar";
import styles from "../styles/Home.module.sass";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
