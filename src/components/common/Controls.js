import React, { useContext } from "react";
import { Next, Play, Previous, Repeat } from "../../Data/Buttons";
import { Sizes } from "../../Data/Sizes";
import { SortingAlgorithms } from "../../Data/Algorithms";
import { Speed } from "../../Data/Speed";
import ArrayContext from "../../utils/ArrayContext";

const Controls = () => {
  const { play, previousStep, nextStep, randomArray, sorting } =
    useContext(ArrayContext);

  return (
    <div>
      <div className="flex flex-col items-center justify-around px-4 py-2 mt-4 font-serif text-sm shadow sm:flex-row sm:text-xl">
        <div className="flex items-center space-x-4">
          <select className="bg-white cursor-pointer sm:py-2" disabled>
            {SortingAlgorithms.map(({ id, name }) => (
              <option value={name} key={id}>
                {name}
              </option>
            ))}
          </select>
          <span className="hidden mr-1 sm:inline-block">Size:</span>
          <select className="py-2 bg-white cursor-pointer" disabled>
            {Sizes.map(({ id, size }) => (
              <option value={size} key={id}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <span>Speed : </span>
          <select className="py-2 bg-white cursor-pointer" disabled>
            {Speed.map(({ id, speed, value }) => (
              <option value={value} key={id}>
                {speed}
              </option>
            ))}
          </select>

          <button
            className={`ml-8 ${
              sorting === true ? "cursor-not-allowed" : "cursor-pointer"
            }`}
            onClick={randomArray}
            disabled={sorting === true ? true : false}
          >
            Randomize
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center px-4 py-2 mt-4 font-serif text-xl shadow">
        <button className="mx-4 text-2xl ">{Repeat}</button>
        <button className="mx-4 text-3xl " onClick={previousStep}>
          {Previous}
        </button>
        <button
          className={`p-2 mx-4 text-5xl bg-pink-300 rounded-full ${
            sorting === true ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={play}
          disabled={sorting === true ? true : false}
        >
          {Play}
        </button>
        <button className="mx-4 text-3xl " onClick={nextStep}>
          {Next}
        </button>
      </div>
    </div>
  );
};

export default Controls;
