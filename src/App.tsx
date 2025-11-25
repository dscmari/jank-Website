import checkIsMobile from "./utils/checkIsMobile";
import checkIsTablet from "./utils/checkIsTablet";
import Navbar from "./components/Navbar";
import ATF from "./components/ATF";

function App() {
  const isMobile = checkIsMobile();
  const isTablet = checkIsTablet();

  return (
    <>
      <Navbar isMobile={isMobile} isTablet={isTablet} />
      <ATF isMobile={isMobile} isTablet={isTablet} />
    </>
  );
}

export default App;
