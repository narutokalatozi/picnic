import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { StyledApp } from "./AppStyles";
import MoonIcon from "./components/MoonIcon";
import PieChart from "./components/PieChart";
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

  const totalParticipants = data.length;
  const q1 = data.map((social) => social.Answer);
  const q2 = data.map((type) => type["Segment Type"]);
  const q3 = data.map((type) => type["Segment Description"]);

  console.log(q3);

  // Instagram, Facebook, Linkedin, Snapchat
  const instagram = q1.filter((insta) => insta === "Instagram").length;
  const facebook = q1.filter((facebook) => facebook === "Facebook").length;
  const linkedin = q1.filter((linkedin) => linkedin === "Linkedin").length;
  const snapchat = q1.filter((snapchat) => snapchat === "Snapchat").length;

  // Mobile, Web, Gender, University, Custom
  const mobile = q2.filter((mobile) => mobile === "Mobile").length;
  const web = q2.filter((web) => web === "Web").length;
  const gender = q2.filter((gender) => gender === "Gender").length;
  const university = q2.filter((uni) => uni === "University").length;
  const custom = q2.filter((custom) => custom === "Custom").length;

  console.log(mobile, web, gender, university, custom);
  // console.log(data);
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
        <PieChart
          instagram={instagram}
          facebook={facebook}
          linkedin={linkedin}
          snapchat={snapchat}
        />
      </StyledApp>
    </ThemeProvider>
  );
};

export default App;
