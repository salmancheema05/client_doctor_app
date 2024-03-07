import React from "react";

const DefaultUl = ({ style, children }) => {
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "space-between",
        listStyle: "none",
        ...style,
      }}
    >
      {children}
    </ul>
  );
};

export default DefaultUl;
