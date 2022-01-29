import React, { useEffect, useState } from "react";
import MoonOutline from "../../static/images/MoonIcon";
import CustomBtn from "../UIComponents/CustomBtn";

function Layout(props) {
  const [theme, setTheme] = useState(true);
  useEffect(() => {
    theme === false
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");
  }, [theme]);

  return (
    <section className="app">
      <header className="header">
        <nav>
          <h2>Where in the world?</h2>
          <CustomBtn
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
