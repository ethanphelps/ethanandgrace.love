const Navbar = () => {
  return (
    <>
      <img className={styles.logo} src="/g+e.png" alt="logo"></img>
      <nav className={styles.nav}>
        <ul className={styles.nav_links}>
          <li>
            <a href="#">details</a>
          </li>
          <li>
            <a href="#">our story</a>
          </li>
          <li>
            <a href="#">registry</a>
          </li>
          <li>
            <a href="#">where to stay</a>
          </li>
          <li>
            <a href="#">gallery</a>
          </li>
        </ul>
      </nav>
    </>
  );
}