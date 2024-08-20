import { useState, useEffect } from "react";

function useMediaQuery(mediaquery: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(mediaquery);
    setMatches(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [mediaquery]);

  return { matches };
}

export default useMediaQuery;
