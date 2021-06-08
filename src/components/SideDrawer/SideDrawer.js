import React, { useEffect, useRef, useState } from "react";
import "./SideDrawer.css";
import profilepic from "../../assets/pic.png";
import { NavLink } from "react-router-dom";
import anime from "animejs";
import useModal from "../../HOC/useModal"
import Customize from "../Customize/Customize";
const SideDrawer = (props) => {
  let drawerClasses = "Side-Drawer";
  if (props.show === true) {
    drawerClasses = "Side-Drawer open";
  }
  const [Modal,open,close] = useModal('root');
  const items = useRef();
  const img = useRef();
  const [animation, setAnimation] = useState();
  const [animationImg, setAnimationImg] = useState();
  useEffect(() => {
    setAnimation(
      anime({
        targets: items.current,
        translateY: [1000, 0],
        delay: 300,
        duration: 400,
        autoplay: false,
        easing: "cubicBezier(.5, .05, .1, .3)",
      })
    );
    setAnimationImg(
      anime({
        targets: img.current,
        translateX: [-500, 0],
        delay: 100,
        duration: 300,
        autoplay: false,
        easing: "cubicBezier(.5, .05, .1, .3)",
      })
    );
  }, []);
  if (props.show) {
    animationImg.play();
    animation.play();
  }
  return (
    <nav className={drawerClasses}>
        <Modal>
        <Customize close={close}/>
      </Modal>
      <div ref={img} className="pic">
        <img src={profilepic} alt="/" />
        <p>profile name</p>
      </div>
      <ul ref={items} onClick={(e)=>{
        console.log(e.target.nodeName)
        if(e.target.nodeName==="LI"){
          props.closeSideDraw();
        }
      }} >
        <li>
          <i className="fa ml-3 mr-2 fa-home"></i>
          <NavLink to="/" active="active">
            Home
          </NavLink>
        </li>
        <li>
        <i className="fa ml-3 mr-2 fa-users"></i>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li onClick={open}>
        <i class="far ml-3 mr-2 fa-edit"></i>
          Customize
        </li>
      </ul>
    </nav>
  );
};
export default SideDrawer;
