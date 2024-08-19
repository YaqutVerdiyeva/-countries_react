import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  function changeDarkMode() {
    localStorage.setItem("mode", darkMode);
    setDarkMode(!darkMode);
  }
  let mode = localStorage.getItem("mode");
  if (mode === "true") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
  console.log(mode);
  return (
    <div>
      <header>
        <div className="container">
          <h2>Where in the world?</h2>
          <a onClick={changeDarkMode} href="#">
            Dark Mode
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
