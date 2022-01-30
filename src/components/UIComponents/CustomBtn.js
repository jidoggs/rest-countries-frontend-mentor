import React from "react";

function CustomBtn({ style, className, name, icon, theme, setTheme }) {
  const changeTheme = () => {
    setTheme(!theme);
    localStorage.setItem("isDark", !theme);
  };

  return (
    <button style={{ ...style }} className={className} onClick={changeTheme}>
      {icon ? icon : ""} {name}
    </button>
  );
}

export default CustomBtn;
