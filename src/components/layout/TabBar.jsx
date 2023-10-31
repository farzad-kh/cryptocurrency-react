

import React, { useEffect, useState, useRef, useContext, useMemo } from "react";
import { Tabs } from "antd";
import { NavLink, useLocation, useParams } from "react-router-dom";

const TabBar = () => {
  const ref = useRef(null);
  const loacation = useLocation();
  const params = useParams();
  const [ac, setAc] = useState();

  const tabNames = [
    // { name: "Home", href: "/", activeClassName: "/" ,icon:<HomeOutlined className='transition-all duration-300 absolute top-[70px] right-[13px]'  /> },
    { name: "Home", href: "/", activeClassName: "/" },

    {
      name: "Cryptocurrency",
      href: "/cryptocurrency",
      activeClassName: "/cryptocurrency",
    },
    { name: "Exchanges", href: "/exchanges", activeClassName: "/exchanges" },
    { name: "News", href: "/news", activeClassName: "/news" },
  ];

  const [activeNav, setActiveNav] = useState({
    activeWidth: "",
    activeOffsetLeft: "",
  });

  useEffect(() => {
    const currentLink = ref?.current.childNodes;
    const links = [...currentLink];
  
    links.map(
      (item) =>
        item.pathname === loacation?.pathname &&
        setActiveNav({
          activeWidth: item.offsetWidth,
          activeOffsetLeft: item.offsetLeft,
        })
    );

    const activePath = tabNames.map((path) => path.href);

    if (!activePath.includes(loacation?.pathname))
      setActiveNav({ activeWidth: 0 });
  }, [loacation]);

  return (
    <div className=" tab-bar px-4 border flex justify-center items-center tab-active  ">
      <div ref={ref} className=" gap-6 flex items-center relative">
        {tabNames.map((item) => (
          <NavLink
            className={" relative"}
            key={item.name}
            activeClassName={item.activeClassName}
            to={item.href}
          >
            {item.name}
          </NavLink>
        ))}

        {/* <div style={{ width: activeNav.activeWidth ? activeNav.activeWidth : ac?.width, left: activeNav.activeOffset ? activeNav.activeOffset : ac?.left }} className={`rounded-md absolute w-10  left-[-8px] h-[3px] bg-[#3194d0] bottom-0 transition-all duration-300`}></div> */}
        <div
          style={{
            width: activeNav?.activeWidth,
            left: activeNav?.activeOffsetLeft,
          }}
          className={`rounded-md absolute w-10  left-[-8px] h-[3px] bg-[#3194d0] bottom-0 transition-all duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default TabBar;
