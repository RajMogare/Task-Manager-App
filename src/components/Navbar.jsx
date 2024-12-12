import React from "react";

const Navbar = ({ onAddClick }) => {
  return (
    <div className="px-9 py-4 h-20 bg-slate-300 flex items-center justify-between">
      <div className="sm:text-normal text-2xl font-semibold">
        Task<span className="text-red-400 font-bold">_List_</span>Manager
      </div>
      <div>
        <button
          onClick={onAddClick}
          className="px-6 py-3 bg-green-400 rounded-lg sm:font-normal md:font-bold outline-none border-none hover:bg-green-500"
        >
          Add +
        </button>
      </div>
    </div>
  );
};

export default Navbar;
