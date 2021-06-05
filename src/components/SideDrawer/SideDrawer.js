import React, { useEffect, useRef,useState } from "react";
import "./SideDrawer.css";
import profilepic from "../../assets/pic.png";
import { NavLink } from "react-router-dom";
import anime from 'animejs'
const SideDrawer = (props) => {
  let drawerClasses = "Side-Drawer";
  if (props.show === true) {
    drawerClasses = "Side-Drawer open";
  }
  const items = useRef();
  const img = useRef();
  const [animation,setAnimation] = useState();
  const [animationImg,setAnimationImg] = useState();
  useEffect(() => {
     
   setAnimation(anime({
      targets:items.current,
      translateY: [1000, 0],
      delay: 300,
      duration: 400,
      autoplay: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    }))
    setAnimationImg(anime({
      targets:img.current,
      translateX: [-500, 0],
      delay: 100,
      duration: 300,
      autoplay: false,
      easing: 'cubicBezier(.5, .05, .1, .3)'
    }))
  }, [])
  if(props.show){
     animationImg.play();
     animation.play();
  }
  return (
    <nav className={drawerClasses}>
      <div ref={img} className="pic">
        <img src={profilepic} alt="/" />
        <p>profile name</p>
      </div>

      <ul ref={items}>
        <li className="">
          <NavLink className="ml-3" to="/edit-profile"><i className="fas mr-4 fa-user"></i>Edit Profile Info </NavLink>
        </li>
        <li className="">
          <NavLink className="ml-3" to="/my-address"><i className="fas mr-4 fa-address-card"></i>My Address </NavLink>
        </li>
        <li className="">
          <NavLink className="ml-3" to="/bookmark-address"> <i className="fas mr-4 fa-bookmark"></i>Bookmark Address </NavLink>
        </li>
        <li className="">
          <NavLink className="ml-3" to="/logout"><i className="fas mr-4 fa-sign-out-alt"></i>Log out </NavLink>
        </li>
        <li className="">
          <NavLink className="ml-3" to="/logout"><i className="fas mr-4 fa-tasks"></i>Activity </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
