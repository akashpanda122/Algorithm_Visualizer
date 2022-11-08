import React from "react";
import { SortChart } from "../visualizer/sorting";
import { Controls, Description } from "../common";

const Visualizer = () => {
  return (
    <div className="p-4 m-4 shadow ">
      <SortChart />
      <Controls />
      <Description />
    </div>
  );
};

export default Visualizer;
