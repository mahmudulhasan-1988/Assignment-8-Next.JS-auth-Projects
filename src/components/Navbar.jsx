"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";
import { MdDensitySmall } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div className="container shadow mx-auto px-4 py-5 mt-5 bg-linear-to-r from-transparent via-orange-100 to-transparent dark:via-white/10">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <Image src="/hasan.png" alt="logo" width={100} height={80} />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 font-semibold">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-tiles-card">All Tiles</NavLink></li>
          <li><NavLink href="/business-profile">Profile</NavLink></li>
        </ul>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3">

          {/* Theme Toggle */}
          <button onClick={toggleTheme} className="btn btn-sm">
            {theme === "light" ? <FiSun /> : <FaMoon />}
          </button>

          {isPending ? (
            <span className="loading loading-spinner text-error"></span>
          ) : user ? (
            <>
              <h2 className="text-sm">Hello, {user.name}</h2>
              <Image
                src={user?.image || "/user.png"}
                alt="User avatar"
                width={35}
                height={35}
                className="rounded-full"
              />
              <button
                className="btn btn-sm btn-secondary"
                onClick={async () => await authClient.signOut()}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/login">
              <button className="btn btn-sm btn-secondary text-white">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
          <MdDensitySmall />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-base-100 shadow rounded-xl p-4 space-y-4">

          <NavLink href="/">Home</NavLink>
          <NavLink href="/all-tiles-card">All Tiles</NavLink>
          <NavLink href="/business-profile">Profile</NavLink>

          {/* Theme Toggle Mobile */}
          <button onClick={toggleTheme} className="btn w-full">
            {theme === "light" ? <FiSun /> : <FaMoon />}
          </button>

        </div>
      )}
    </div>
  );
};

export default Navbar;










