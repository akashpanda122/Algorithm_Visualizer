import React from "react";

const Header = () => {
  return (
    <div className="shadow-md bg-white  p-4 fixed w-full text-center text-xl font-serif">
      <span className="mx-4">Algo Visualizer</span> {" --- "}
      <select className="outline-none bg-white py-2 px-4 cursor-pointer">
        <option value="sorting">Sorting</option>
        <option value="searching">Searching</option>
        <option value="pathFinding">PathFinding</option>
      </select>
    </div>
  );
};

export default Header;
