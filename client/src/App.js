import { useState, useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      return setData(data);
    };
    fetchData();
  }, []);

  console.log(data);
  return <div>App</div>;
};

export default App;
