import React from "react";
const buttonMappings = {
  default: {
    name: "Default",
    style: { backgroundColor: "blue", color: "white", padding: "10px" },
  },
  ok: { name: "Ok", style: { backgroundColor: "green" } },
  cancel: { name: "Cancel", style: { backgroundColor: "red" } },
  login: { name: "Login", style: { backgroundColor: "blue", height: "30px" } },
};

const DefaultButton = ({
  whichButton = "default",
  handler = () => {},
  styles,
  children = null,
  ...rest
}) => {
  return (
    <button
      style={{
        textTransform: "none",
        ...buttonMappings[whichButton].style,
        ...styles,
      }}
      onClick={handler}
      {...rest}
    >
      {children != null ? children : `${buttonMappings[whichButton].name}`}
    </button>
  );
};

export { DefaultButton };
