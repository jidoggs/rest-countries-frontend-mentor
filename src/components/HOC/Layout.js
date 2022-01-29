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
    <section>
      <header className="header">
        <h1>Where in the world?</h1>
        <CustomBtn
          name="Dark Mode"
          theme={theme}
          setTheme={setTheme}
          icon={<MoonOutline />}
        />
      </header>
      {props.children}
    </section>
  );
}

export default Layout;
