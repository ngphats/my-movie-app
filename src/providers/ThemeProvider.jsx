import { useState } from "react";
import ThemeContext from "../contexts/ThemeContext";

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={setTheme}>
      {children}
      <div>{theme}</div>
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
