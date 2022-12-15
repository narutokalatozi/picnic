import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles";
import MoonIcon from "./components/MoonIcon";
import SunIcon from "./components/SunIcon";
import Switch from "./components/Switch";
import { darkTheme, lightTheme } from "./Themes";

const App = () => {
  const [data, setData] = useState([]);
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      return setData(data);
    };
    fetchData();
  }, []);

  console.log(data);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={theme} />
        <MoonIcon />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
