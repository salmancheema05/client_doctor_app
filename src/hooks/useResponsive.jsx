import React, { useState, useEffect } from "react";

const useResponsive = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  const [isExtraSmallScreen, setIsExtraSmallScreen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 600 && width < 900) {
        setIsSmallScreen(true);
        setIsMediumScreen(false);
        setIsExtraSmallScreen(false);
        setIsLargeScreen(false);
      } else if (width >= 900 && width < 1200) {
        setIsSmallScreen(false);
        setIsMediumScreen(true);
        setIsExtraSmallScreen(false);
        setIsLargeScreen(false);
      } else if (width < 600) {
        setIsSmallScreen(false);
        setIsMediumScreen(false);
        setIsExtraSmallScreen(true);
        setIsLargeScreen(false);
      } else {
        setIsLargeScreen(true);
        setIsSmallScreen(false);
        setIsMediumScreen(false);
        setIsExtraSmallScreen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isSmallScreen, isMediumScreen, isExtraSmallScreen, isLargeScreen };
};

export default useResponsive;
