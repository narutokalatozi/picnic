import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles";
import BarChart from "./components/Bar";
import { DemoBar } from "./components/BarChart";
import MoonIcon from "./components/MoonIcon";
import { PieChart } from "./components/MobileDonutChart";
import SunIcon from "./components/SunIcon";
import Switch from "./components/Switch";
import { darkTheme, lightTheme } from "./Themes";
import { DonutChart } from "./components/WebDonutChart";

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

  const totalParticipants = data.reduce((sum, person) => person.Count + sum, 0);
  const q1 = data.map((social) => social.Answer);
  const q2 = data.map((type) => type["Segment Type"]);
  const q3 = data.map((type) => type["Segment Description"]);

  // Instagram, Facebook, Linkedin, Snapchat
  const instagram = q1.filter((insta) => insta === "Instagram").length;
  const facebook = q1.filter((facebook) => facebook === "Facebook").length;
  const linkedin = q1.filter((linkedin) => linkedin === "Linkedin").length;
  const snapchat = q1.filter((snapchat) => snapchat === "Snapchat").length;

  // Mobile, Web, Gender, University, Custom
  const mobileParticipants = data
    .slice(0, 4)
    .reduce((sum, mobile) => mobile.Count + sum, 0);

  const webParticipants = data
    .slice(4, 8)
    .reduce((sum, web) => web.Count + sum, 0);

  const genderParticipants = data
    .slice(8, 16)
    .reduce((sum, gender) => gender.Count + sum, 0);
  const uniParticipants = data
    .slice(16, 324)
    .reduce((sum, uni) => uni.Count + sum, 0);
  const customParticipants = data
    .slice(324)
    .reduce((sum, custom) => custom.Count + sum, 0);

  console.log(data);
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={theme} />
        <MoonIcon />
        <div>
          <h1>{totalParticipants} Participants</h1>
          <h2>
            You open ur phone and have a notif badge on instagram, facebook,
            snapchat, and linkedin...which do you click first?
          </h2>
        </div>
        <DemoBar />
        <PieChart />
        <DonutChart />

        {/* <BarChart /> */}
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
