import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";
import useMediaQuery from "../hooks/useMediaQuery";

const ConditionalNavbar = () => {
  const isPhone = useMediaQuery('(max-width: 415px)');

  return isPhone ? <MobileNavbar/> : <Navbar/>;
}

export default ConditionalNavbar;