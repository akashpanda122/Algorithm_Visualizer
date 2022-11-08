import React from "react";

const Description = () => {
  return (
    <div className="grid sm:grid-cols-2 w-full p-4 text-center ">
      <div className="sm:border-r-2 space-y-4 border-b-2 sm:border-b-0 pb-8 sm:pb-0 mb-4 sm:mb-0">
        <h1 className="text-xl font-serif underline">Sorting Algorithm</h1>
        <div>Description of the Alogrithm</div>
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-serif underline">Complexity</h1>
        <div>Time Complexity</div>
        <div>Space Complexity</div>
      </div>
    </div>
  );
};

export default Description;
