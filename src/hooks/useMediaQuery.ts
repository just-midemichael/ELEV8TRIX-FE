import { useEffect, useState } from "react";

interface MediaQueryProps {
  query: string;
  defaultValue: boolean;
}

const useMediaQuery = ({ query, defaultValue }: MediaQueryProps) => {
  const [matches, setMatches] = useState(defaultValue);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mediaQueryList.addEventListener("change", handler);
    return () => mediaQueryList.removeEventListener("change", handler);
  });
  return matches;
};

export default useMediaQuery;
