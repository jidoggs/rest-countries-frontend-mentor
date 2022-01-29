import React from "react";
import { regions } from "../../partials/helperArray";
import DropDownIcon from "../../static/images/DropDownIcon";

function Select({ selectValue, changeSelectValue }) {
  const selectOptions = regions.map((itm, i) => {
    return (
      <option key={i} value={itm.toLowerCase()}>
        {itm}
      </option>
    );
  });

  return (
    <form className="select__form">
      <DropDownIcon />
      <select
        value={selectValue}
        onChange={(e) => changeSelectValue(e.target.value)}
      >
        {selectOptions}
      </select>
    </form>
  );
}

export default Select;
