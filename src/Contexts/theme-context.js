import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(
    localStorage.getItem("userTheme") ?? false
  );

  useEffect(() => {
    localStorage.setItem("userTheme", darkTheme);
  }, [darkTheme]);

  return (
    <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
