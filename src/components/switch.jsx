import React, { useState } from "react";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
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
          checked={isOn}
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
            backgroundColor: isOn ? "#2196F3" : "#ccc",
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
            transform: isOn ? "translateX(26px)" : "translateX(0)",
          }}
        ></span>
      </label>
    </div>
  );
};

export default Switch;
