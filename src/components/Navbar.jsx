import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className=" navbar max-w-5xl flex justify-between mx-auto place-items-center ml-auto mt-10">
      <h1 className="text-3xl font-mono font-semibold">UNSPLASH</h1>
      <div className="texts flex gap-6">
        <NavLink
          className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className="font-medium text-xl hover:bg-primary hover:text-slate-200 px-2 py-1 rounded transition duration-300"
          to="/contact"
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
