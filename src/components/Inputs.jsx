import React from "react";

const DefaultInput = ({ type, onChange, handler, style, placeholder }) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        onClick={handler}
        placeholder={placeholder}
        style={{ ...style }}
      />
    </>
  );
};

export default DefaultInput;
