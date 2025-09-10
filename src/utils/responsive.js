// Responsive breakpoints and utilities
export const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

// Common responsive classes
export const responsiveClasses = {
  // Container classes
  container: "container mx-auto px-4 sm:px-6 lg:px-8",

  // Text sizing
  heading: {
    h1: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    h2: "text-2xl sm:text-3xl lg:text-4xl xl:text-5xl",
    h3: "text-xl sm:text-2xl lg:text-3xl",
    h4: "text-lg sm:text-xl lg:text-2xl",
  },

  // Button sizing
  button: {
    sm: "px-4 py-2 text-sm sm:text-base",
    md: "px-6 py-3 text-base sm:text-lg",
    lg: "px-8 py-4 text-lg sm:text-xl",
  },

  // Spacing
  spacing: {
    section: "py-12 lg:py-16 xl:py-20",
    element: "mb-6 lg:mb-8 xl:mb-10",
  },

  // Grid layouts
  grid: {
    cards:
      "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8",
    menu: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6",
  },
};

// Media query hooks for JavaScript
export const useMediaQuery = (query) => {
  if (typeof window === "undefined") return false;

  const mediaQuery = window.matchMedia(query);
  const [matches, setMatches] = useState(mediaQuery.matches);

  useEffect(() => {
    const handler = (event) => setMatches(event.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [mediaQuery]);

  return matches;
};

// Common responsive utilities
export const isMobile = () => useMediaQuery(`(max-width: ${breakpoints.md})`);
export const isTablet = () =>
  useMediaQuery(
    `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`
  );
export const isDesktop = () => useMediaQuery(`(min-width: ${breakpoints.lg})`);
