import React, { useState, cloneElement } from "react";

export default function Tooltip({ text, children }) {
  const [show, setShow] = useState(false);

 
  const childWithProps = cloneElement(children, {
    className: `${children.props.className || ""} tooltip`
  });

  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {childWithProps}

      {show && <div>{text}</div>}
    </div>
  );
}
