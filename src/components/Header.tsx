import { NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  const links = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Browse Comics",
      to: "/browse",
    },
    {
      text: "My Profile",
      to: "/profile",
    },
  ];
  return (
    <div className="font-inter">
      <nav className="w-[1280px] flex items-center justify-between">
        <img src={Logo} alt="logo" className="w-8 h-8" />
        <div className="flex space-x-3">
          {links.map((link) => (
            <NavLink
              key={link.text}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "text-sm text-nav font-semibold" : "text-sm"
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
        <NavLink to="/upload" className="text-sm">
          Upload Comic
        </NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
