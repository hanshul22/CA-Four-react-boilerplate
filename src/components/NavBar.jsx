import React, { useState } from "react";
function NavBar() {
  // const [darkMode, setDarkMode] = useState(false);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightkMode();
    }
  };

  return (
    <>
      <div className={`flex_navbar `}>
        <div className="flexleft">
          <h1><b> Kalvium </b></h1>
        </div>
        <div className="sitename_navbar">
          <h1 className="sitename"><b> Quiz Brainia </b></h1>
        </div>
        <div className="toggleBtn">
          <label className="switch">
            <input type="checkbox" id="themeToggle" onChange={toggleTheme} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
    </>
  );
}

export default NavBar;
