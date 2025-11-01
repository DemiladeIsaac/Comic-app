import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { text: "Home", to: "/" },
    { text: "Browse Comics", to: "/browse" },
    { text: "My Profile", to: "/profile" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="font-inter">
      <nav className="flex items-center justify-between py-4 px-6">
        <NavLink to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 h-8" />
          <span className="text-base md:text-lg font-semibold text-nav">
            ComicVerse
          </span>
        </NavLink>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-nav font-semibold text-sm"
                  : "text-gray-700 hover:text-nav text-sm"
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        {/* <NavLink
          to="/upload"
          className="hidden md:block text-sm bg-nav text-white px-3 py-1.5 rounded-full hover:bg-blue-700 transition"
        >
          Upload Comic
        </NavLink> */}

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-3xl text-nav focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-white shadow-md py-4 px-6 animate-slideDown">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink
                key={link.text}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive
                    ? "text-nav font-semibold text-sm"
                    : "text-gray-700 hover:text-nav text-sm"
                }
              >
                {link.text}
              </NavLink>
            ))}
            {/* <NavLink
              to="/upload"
              onClick={closeMenu}
              className="text-sm text-center bg-nav text-white px-3 py-2 rounded-full hover:bg-blue-700 transition"
            >
              Upload Comic
            </NavLink> */}
          </ul>
        </div>
      )}

      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
