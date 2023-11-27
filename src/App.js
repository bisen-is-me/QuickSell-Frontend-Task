// App.jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import "./day-mode.css"; 
import "./dark-mode.css"; 
import Navbar from "./components/Navbar";
import axios from "axios";
import Dashboard from "./components/Dashboard";

const getGroup = () => {
  if (localStorage.getItem("group")) {
    return localStorage.getItem("group");
  } else {
    return "status";
  }
};

const getOrder = () => {
  if (localStorage.getItem("order")) {
    return localStorage.getItem("order");
  } else {
    return "priority";
  }
};

function App() {
  const [displayButton, setDisplayButton] = useState(false);
  const [GroupBy, setGroupBy] = useState(getGroup());
  const [OrderBy, setOrderBy] = useState(getOrder());
  const [isDarkMode, setIsDarkMode] = useState(false); 

  const handleGroupBy = (e) => {
    setGroupBy(e.target.value);
    setDisplayButton(!displayButton);
    localStorage.setItem("group", e.target.value);
  };

  const handleOrderBy = (e) => {
    setOrderBy(e.target.value);
    setDisplayButton(!displayButton);
    localStorage.setItem("order", e.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const url = "https://api.quicksell.co/v1/internal/frontend-assignment";

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={`Dashboard__Wrapper ${isDarkMode ? 'dark-mode' : 'day-mode'}`}>
      <div className="Navbar__Backdrop"></div>
      <div className="Dashboard__Content">
        <Navbar
          displayButton={displayButton}
          setDisplayButton={setDisplayButton}
          GroupBy={GroupBy}
          OrderBy={OrderBy}
          handleGroupBy={handleGroupBy}
          handleOrderBy={handleOrderBy}
          toggleDarkMode={toggleDarkMode}
        />
        <Dashboard data={data} GroupBy={GroupBy} OrderBy={OrderBy} />
      </div>
    </div>
  );
}

export default App;
