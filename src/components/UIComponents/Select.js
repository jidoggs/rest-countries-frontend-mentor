import React from "react";
import { regions } from "../../partials/helperArray";

function Select({ selectValue, changeSelectValue }) {
  const selectOptions = regions.map((itm, i) => {
    return (
      <option key={i} value={itm.toLowerCase()}>
        {itm}
      </option>
    );
  });

  return (
    <select
      value={selectValue}
      onChange={(e) => changeSelectValue(e.target.value)}
    >
      {selectOptions}
    </select>
  );
}

export default Select;
