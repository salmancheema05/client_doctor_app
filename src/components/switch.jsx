import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkModeReducer } from "../store/features/darkMode";
const Switch = ({ styles }) => {
  const [darkMode, setDarkMode] = useState(false);
  const dispatch = useDispatch();
  const toggleSwitch = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    dispatch(darkModeReducer(newDarkMode));
  };

  return (
    <div style={{ display: "flex", alignItems: "center", ...styles }}>
      <label
        style={{
          position: "relative",
          display: "inline-block",
          width: "60px",
          height: "34px",
        }}
      >
        <input
          type="checkbox"
          checked={darkMode}
          onChange={toggleSwitch}
          style={{ opacity: 0, width: 0, height: 0 }}
        />
        <span
          style={{
            position: "absolute",
            cursor: "pointer",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: darkMode ? "#2196F3" : "#ccc",
            transition: "background-color .4s",
            borderRadius: "34px",
          }}
        ></span>
        <span
          style={{
            position: "absolute",
            content: '""',
            height: "26px",
            width: "26px",
            left: "4px",
            bottom: "4px",
            backgroundColor: "white",
            transition: "transform .4s",
            borderRadius: "50%",
            transform: darkMode ? "translateX(26px)" : "translateX(0)",
          }}
        ></span>
      </label>
    </div>
  );
};

export default Switch;
