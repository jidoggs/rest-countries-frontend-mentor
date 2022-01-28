import React from "react";
import CustomBtn from "../UIComponents/CustomBtn";

function Header(props) {
  return (
    <>
      <header className="header">
        <h1>Where in the world?</h1>
        <CustomBtn name="Dark Mode" />
      </header>
      {props.children}
    </>
  );
}

export default Header;
