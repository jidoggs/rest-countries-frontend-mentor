import * as React from "react"

const DropDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="icon__down"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"Chevron Down"}</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="m112 184 144 144 144-144"
    />
  </svg>
)

export default DropDownIcon
