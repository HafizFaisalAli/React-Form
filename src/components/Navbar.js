import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 px-32 bg-zinc-50 shadow-lg">
      <section>
        <Link to="/">
          <h1 className="font-semibold text-4xl uppercase bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            ReactForm
          </h1>
        </Link>
      </section>
      <section className="flex items-center gap-12 text-slate-600">
        <Link to="/">
          <span className="font-normal text-2xl">Home</span>
        </Link>
        <Link to="/about">
          <span className="font-normal text-2xl">About</span>
        </Link>
        <Link to="/auth/signin">
          <span className="font-normal text-2xl">Sign In</span>
        </Link>
        <Link to="/auth/signup">
          <span className="font-normal text-2xl">Sign Up</span>
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
