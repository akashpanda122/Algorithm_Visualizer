import React, { useContext } from "react";
import { Bar } from "../../../utils";
import ArrayContext from "../../../utils/ArrayContext";

const SortChart = () => {
  const { array, colorKey } = useContext(ArrayContext);
  return (
    <div className="p-4 bg-gray-200 h-[50vh] flex items-end shadow-inner">
      {array.map((value, index) => {
        let maxNum = Math.max(...array);
        let height = (value / maxNum) * 100;
        let width = 100 / array.length;

        return (
          <Bar
            key={index}
            number={value}
            height={height}
            width={width}
            length={array.length}
            color={colorKey[index]}
          />
        );
      })}
    </div>
  );
};

export default SortChart;
