import React from "react";

const Bar = ({ number, height, width, length, color }) => {
  const colors = [
    ["rgba(255,255,255,1)"],
    ["rgba(185,28,28,1"],
    ["rgba(252, 165, 165, 0.5)"],
    ["rgba(134,239,172,0.5"],
  ];

  const barStyles = {
    height: `${height}%`,
    width: `${width}%`,
    backgroundColor: colors[color],
  };

  return (
    <div className=" shadow-md mr-0.5 text-center  " style={barStyles}>
      {length < 25 && <span>{number}</span>}
    </div>
  );
};

export default Bar;
