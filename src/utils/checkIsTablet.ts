import { useEffect, useState } from "react";

export default function checkIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 768 && window.innerWidth < 1280) {
      //md: 768 lg:1024 xl:1280
      setIsTablet(true);
    } else {
      setIsTablet(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if (window.innerWidth > 768 && window.innerWidth < 1280) {
      //md: 768 lg:1024 xl:1280
      setIsTablet(true);
    }
  }, []);
  return isTablet;
}