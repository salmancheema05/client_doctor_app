import React from "react";

const DefaultImage = ({ src, styles, height = "30%", width = "30%" }) => {
  return (
    <div style={{ width: width, height: height, ...styles }}>
      <img src={src} width="100%" height="100%" />;
    </div>
  );
};

export default DefaultImage;
