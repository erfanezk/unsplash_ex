import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import anime from "animejs";
import "./Toolbar.css";
const Toolbar = (props) => {
  const [headerStyle, setHeaderStyle] = useState({
    transition: "all 200ms ease-in",
  });
  const [bg,setBg] = useState('bg-white');
  const navItem1 = useRef();
  const navItem2 = useRef();
  const mobileNav= useRef();
  useEffect(() => {


      anime({
        targets: [navItem1.current, navItem2.current],
        translateX: [200, 0],
        delay: 1000,
        duration: 600,
      });
      anime({
        targets:mobileNav.current,
        translateY: [-200, 0],
        delay: 1000,
        duration: 1000,
      });

    
  }, []);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isVisible = currPos.y < -450;
      const shouldBeStyle = {
        transition: `all 200ms ${isVisible ? "ease-in" : "ease-out"}`,
        backgroundColor: isVisible ? "white" : "transparent",
        color: isVisible ? "#282133" : "white",
        boxShadow: isVisible ? "1px 1px 8px #282133" : "",
      };
     setBg(isVisible ?'bg-black' : 'bg-white');
      setHeaderStyle(shouldBeStyle);
    },
    [headerStyle]
  );
  return (
    <header style={headerStyle} className="Toolbar">
      <nav className="Toolbar_Navigation">
        <div ref={mobileNav} className='mobile'>
          <div className="Toolbar_Logo">
            <Link to="/">
              <span className="text-base ">Erfanezk</span>
            </Link>
          </div>
          <div className='togglerContainer'>
            <button onClick={props.toggler} className="w-6   focus:outline-none flex flex-col">
              <span className={`toggler togglerFirstChild ${bg}`}></span>
              <span className={`toggler ${bg}`}></span>
              <span className={`toggler togglerLastChild ${bg}`}></span>
            </button>
          </div>
        </div>
        <div className="spacer"></div>
        <div className="Toolbar_Navigation_Item">
          <ul>
            <li ref={navItem1}>
              <NavLink to="/" active="active">
                Home
              </NavLink>
            </li>
            <li ref={navItem2}>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Toolbar;
