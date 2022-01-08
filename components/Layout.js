import Navbar from "./Navbar";
import styles from "../styles/Home.module.sass";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>💕 G & E&apos;s Wedding 💕</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
