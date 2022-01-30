import React, { useEffect, useState } from "react";
import MoonOutline from "../../static/images/MoonIcon";
import CustomBtn from "../UIComponents/CustomBtn";

function Layout(props) {
  const initialState = !localStorage.getItem("isDark")
    ? true
    : JSON.parse(localStorage.getItem("isDark"));
  const [theme, setTheme] = useState(initialState);

  useEffect(() => {
    theme
      ? document.documentElement.setAttribute("data-theme", "light")
      : document.documentElement.removeAttribute("data-theme", "light");
  }, [theme]);

  return (
    <section className="app">
      <header className="header">
        <nav>
          <h2>Where in the world?</h2>
          <CustomBtn
            className="header__btn"
            name="Dark Mode"
            theme={theme}
            setTheme={setTheme}
            icon={<MoonOutline />}
          />
        </nav>
      </header>
      {props.children}
    </section>
  );
}

export default Layout;
