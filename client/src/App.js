import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp, Title, Title2 } from "./AppStyles";
import { DemoBar } from "./components/BarChart";
import MoonIcon from "./components/MoonIcon";
import { PieChart } from "./components/MobileDonutChart";
import SunIcon from "./components/SunIcon";
import Switch from "./components/Switch";
import { darkTheme, lightTheme } from "./Themes";
import { DonutChart } from "./components/WebDonutChart";
import { FemaleDonutChart } from "./components/FemaleDonutChart";
import { MaleDonutChart } from "./components/MaleDonutChart";
import UniBarchart from "./components/UniBarChart";
import { CustomDonutChart } from "./components/CustomDonutChart";
import { UniversityBarChart } from "./components/UniversityBarChart";

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

  const singleUni = [...new Set(q3.slice(16, 324))];

  // console.log(data);

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

  const sum = {
    mobileParticipants,
    webParticipants,
    genderParticipants,
    uniParticipants,
    customParticipants,
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <StyledApp>
        <SunIcon />
        <Switch toggleTheme={toggleTheme} isDarkTheme={theme} />
        <MoonIcon />
        <div>
          <Title>{totalParticipants} Participants</Title>
          <Title2>
            Question: You open ur phone and have a notif badge on instagram,
            facebook, snapchat, and linkedin...which do you click first?
          </Title2>
        </div>
        <DemoBar sum={sum} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <PieChart />
            <DonutChart />
          </div>
          <div>
            <FemaleDonutChart />
            <MaleDonutChart />
          </div>
        </div>
        <UniBarchart labels={singleUni} />
        <Title2>Segment Description: University</Title2>
        <UniversityBarChart data={data} />
        <Title2>Segment Description: Custom</Title2>
        <CustomDonutChart data={data} />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
