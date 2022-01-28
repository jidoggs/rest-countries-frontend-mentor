import React from "react";

function CustomBtn({ style, className, name, icon }) {
  const changeTheme = () => {
    //
  };

  return (
    <button
      style={{ ...style }}
      className={className}
      onClick={changeTheme}
    >{`${icon ? icon : ""}${name}`}</button>
  );
}

export default CustomBtn;
