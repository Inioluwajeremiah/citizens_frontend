import { useEffect, useState } from "react";
import HamburgerMenuIcon from "../../assets/icons/MenuIcon";
import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleTheme, setToggleTheme] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navItemsData = [
    {
      title: "About US",
      route: "about",
      linkid: "about",
    },
    {
      title: "Policies",
      route: "policies",
      linkid: "policies",
    },
    {
      title: "Blog",
      route: "blog",
      linkid: "blog",
    },
    {
      title: "Contact US",
      route: "#contact",
      linkid: "contact",
    },
  ];

  const handleLink = (linkId: string) => {
    setToggleMenu(false);
    setActiveLink(linkId);
    document.getElementById(linkId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  // const handleToggleTheme = () => {
  //   setToggleTheme(!toggleTheme);
  // };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setToggleTheme(true);
    } else {
      setToggleTheme(false);
    }
  }, []);

  useEffect(() => {
    if (toggleTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [toggleTheme]);

  return (
    <header className="dark:bg-[#222] z-50 dark:text-white bg-white shadow-md h-20 w-full fixed top-0 left-0">
      <div className="container mx-auto w-[80%] lg:w-full h-full flex flex-row items-center justify-between">
        {/* logo */}
        <div className={`flex flex-row items-center `}>
          <NavLink
            to={"/"}
            onClick={() => handleLink("hero")}
            className="flex flex-row items-center"
          >
            <img src={logo} alt="Citizens logo" />
            <p className="text-base font-semibold text-blackColor ml-2 ">
              CitizensRep
            </p>
          </NavLink>
          {/* toggle theme */}

          {/* <button className="ml-4" onClick={handleToggleTheme}>
            <ThemeIcon />
          </button> */}
        </div>

        <nav
          className={` fixed lg:relative flex flex-col lg:flex-row items-center lg:h-full lg:top-0 lg:-left-0 lg:w-fit ${
            toggleMenu
              ? " left-0 top-20 h-screen justify-center bg-white w-full "
              : "-left-full"
          }`}
        >
          {navItemsData.map((item, index) => (
            <NavLink
              key={index}
              className={({ isActive }) =>
                `ml-4 text-blackColor text-base font-semibold ${isActive}  ? "" :""`
              }
              to={item.route}
              style={{
                borderBottomColor: "#131313",
                borderBottomWidth: 4,
                borderBottom: activeLink === item.linkid ? "solid" : "",
                marginRight: 20,
                marginBottom: toggleMenu ? 40 : "",
              }}
              onClick={() => handleLink(item.linkid)}
            >
              {item.title}
            </NavLink>
          ))}

          <button className="bg-primaryColor h-16 px-10">
            <p className="text-white text-base font-semibold">Donate</p>
          </button>
        </nav>
        <button className=" lg:hidden" onClick={handleToggleMenu}>
          <HamburgerMenuIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;
