import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import Policyicon from "../../assets/icons/Policyicon";
import { useEffect, useState } from "react";
import Blogicon from "../../assets/icons/Blogicon";
import Usersicon from "../../assets/icons/Usersicon";
import Settingicon from "../../assets/icons/Settingicon";
import Dashboardicon from "../../assets/icons/Dashboardicon";

const Sidebar = () => {
  const [pathname, setPathname] = useState("");
  const location = useLocation();

  const navLinkData = [
    {
      title: "Home",

      link: "/admin/home",
      icon: (
        <Dashboardicon
          color={pathname === "/admin/home" ? "#fff" : "#C0C7C7"}
        />
      ),
    },
    {
      title: "Policies",
      link: "/admin/policies",
      icon: (
        <Policyicon
          color={pathname === "/admin/policies" ? "#fff" : "#C0C7C7"}
        />
      ),
    },
    {
      title: "Blog",
      icon: (
        <Blogicon color={pathname === "/admin/blogs" ? "#fff" : "#C0C7C7"} />
      ),
      link: "/admin/blogs",
    },
    {
      title: "Users",
      icon: (
        <Usersicon color={pathname === "/admin/users" ? "#fff" : "#C0C7C7"} />
      ),
      link: "/admin/users",
    },
    {
      title: "Settings",
      icon: (
        <Settingicon
          color={pathname === "/admin/settings" ? "#fff" : "#C0C7C7"}
        />
      ),
      link: "/admin/settings",
    },
  ];

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);
  // fixed left-0 top-0
  return (
    <nav className="h-screen w-[20%] bg-[#001D22] py-20 overflow-y-scroll">
      <Link
        to={"/admin/home"}
        className="w-[80%] mx-auto flex flex-row items-center "
      >
        <img src={logo} alt="CitizensRep logo" />
        <p className="text-white ml-2 font-semibold text-base">CitizensRep</p>
      </Link>

      <ul className="w-[80%] mx-auto mt-12">
        {navLinkData.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `w-[80%] flex flex-row gap-x-2 items-center px-4 py-2 mt-6 ${
                isActive ? "text-white bg-[#2B4D53]" : "text-[#C0C7C7] bg-none"
              }`
            }
          >
            <div>{item.icon}</div>

            <p className="text-sm">{item.title}</p>
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;
