import React, { useState } from "react";

const DefaultInput = ({ onChange, handler, style, placeholder, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState();
  const handleFocus = () => {
    setIsFocused(true);
    if (inputValue != "") {
      setIsFocused(true);
    }
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleBlur = () => {
    if (inputValue == "") {
      setIsFocused(false);
    }
  };
  return (
    <input
      placeholder="first Name"
      value={inputValue}
      onChange={handleChange}
      {...rest}
      style={{
        width: "100%",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        paddingBottom: "20px",
        paddingTop: "20px",
        backgroundColor: isFocused ? "#badbdf" : "transparent",
        outline: "none",
        borderBottomColor: "lightgray",
        ...style,
      }}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};
const DefaultSelectInput = ({
  onChange,
  handler,
  style,
  placeholder,
  ...rest
}) => {
  return (
    <select name="cars" id="cars" form="carform">
      <option value="">patient</option>
      <option value="">Doctor</option>
    </select>
  );
};
export { DefaultInput, DefaultSelectInput };
