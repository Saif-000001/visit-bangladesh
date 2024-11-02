import React, { useState, useEffect } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Header() {
  const [isBangladeshDropdownOpen, setIsBangladeshDropdownOpen] =
    useState(false);
  const [isFollowUsDropdownOpen, setisFollowUsDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBangladeshDropdownToggle = () => {
    setIsBangladeshDropdownOpen((prev) => !prev);
  };
  const handleFollowUsDropdownToggle = () => {
    setisFollowUsDropdownOpen((prev) => !prev);
  };
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setIsBangladeshDropdownOpen(true)}
        onMouseLeave={() => setIsBangladeshDropdownOpen(false)}
      >
        <NavLink to="/bangladesh" onClick={handleBangladeshDropdownToggle}>
          Bangladesh
        </NavLink>
        <ul
          className={`p-4 lg:absolute lg:top-full lg:left-0 lg:bg-orange-400 lg:shadow-lg lg:rounded-lg ${
            isBangladeshDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <NavLink to="/barisal">Barisal</NavLink>
          </li>
          <li>
            <NavLink to="/chittagong">Chittagong</NavLink>
          </li>
          <li>
            <NavLink to="/dhaka">Dhaka</NavLink>
          </li>
          <li>
            <NavLink to="/khulna">Khulna</NavLink>
          </li>
          <li>
            <NavLink to="/mymensingh">Mymensingh</NavLink>
          </li>
          <li>
            <NavLink to="/rajshahi">Rajshahi</NavLink>
          </li>
          <li>
            <NavLink to="/rangpur">Rangpur</NavLink>
          </li>
          <li>
            <NavLink to="/sylhet">Sylhet</NavLink>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/corporate">Corporate</NavLink>
      </li>
      <li>
        <NavLink to="/login">Members Login</NavLink>
      </li>
      <li
        className="relative"
        onMouseEnter={() => setisFollowUsDropdownOpen(true)}
        onMouseLeave={() => setisFollowUsDropdownOpen(false)}
      >
        <NavLink to="/followus" onClick={handleFollowUsDropdownToggle}>
          Follow us
        </NavLink>
        <ul
          className={`p-4 lg:absolute lg:top-full lg:left-0 lg:bg-orange-400 lg:shadow-lg lg:rounded-lg ${
            isFollowUsDropdownOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="facebook"
              className="text-[##1877F2] hover:text-blue-700 transition-colors"
            >
              <FaFacebook size={15} /> <span>Facebook</span>
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="instagram"
              className="text-[##C13584] hover:text-[#e1306c] transition-colors"
            >
              <FaInstagram size={15} /> <span>Instagram</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="twitter"
              className="text-[##1DA1F2] hover:text-[#1A91DA] transition-colors"
            >
              <FaTwitter size={15} /> <span>Twitter</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <NavLink to="/language">Language</NavLink>
      </li>
    </>
  );

  return (
    <header
      className={`navbar fixed top-0 z-10 h-16 w-full font-bold transition-colors duration-300 ${
        isScrolled ? "bg-white text-gray-500" : "bg-transparent text-white"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-500 rounded-box mt-3 w-52 p-2 shadow-lg"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-lg lg:text-xl font-semibold" href="/">
          Bangladesh
        </a>
      </div>

      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </nav>
    </header>
  );
}

export default Header;
