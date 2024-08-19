import React, { useState } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(true);
  function changeDarkMode() {
    document.body.classList.toggle("dark-mode");
    setDarkMode(!darkMode);
    console.log(!darkMode);
  }
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
