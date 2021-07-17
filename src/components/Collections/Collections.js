import React, { useRef, useEffect, useState } from "react";
import classes from "./Collections.module.css";
import { classification } from "../../Redux/Actions";
import { connect } from "react-redux";
import overlap from "../../HOC/useOverlap";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
const Collections = (props) => {
  const mainNav = useRef(null);
  // const animateMainNav = useRef(null);
  const [stickyState, setStickyState] = useState(false);

  useScrollPosition(({ prevPos, currPos }) => {
    if (props.homeToolbar) {
      const isTouching = overlap(props.homeToolbar, mainNav.current);
      console.log(isTouching ,stickyState)
      if(stickyState !== isTouching){
        setStickyState(isTouching);
      }
    }
  });
  // useEffect(() => {
  //     animateMainNav.current = anime({
  //       targets: mainNav.current,
  //       autoplay: false,
  //       width: {
  //           value:["100%", "50%"],
  //           duration: 200,

  //       },
  //       top:{
  //           value:[66,5],
  //           delay:540,
  //           duration:80
  //       },
  //     });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  let navClass = [classes.collection,classes.stickyState];
  if (!stickyState) {
    navClass.pop()
  }

  return (
    <>
      <div className={classes.topNav}></div>
      <nav ref={mainNav} className={navClass.join(" ")}>
        <ul>
          <li
            className={`cursor-pointer  text-sm ${
              props.classificationName === "book" ? "activeee" : ""
            }`}
            onClick={props.classification.bind(null, "book")}
          >
            Book
          </li>
          <li
            className={`cursor-pointer  text-sm  ${
              props.classificationName === "food" ? "activeee" : ""
            }`}
            onClick={props.classification.bind(null, "food")}
          >
            Food
          </li>
          <li
            className={`cursor-pointer  text-sm e ${
              props.classificationName === "Animals" ? "activeee" : ""
            }`}
            onClick={props.classification.bind(null, "Animals")}
          >
            Animals
          </li>
          <li
            className={`cursor-pointer text-sm lg:text-sm ${
              props.classificationName === "programming" ? "activeee" : ""
            }`}
            onClick={props.classification.bind(null, "programming")}
          >
            Programming
          </li>
        </ul>
      </nav>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    classificationName: state.classificationName.term,
    homeToolbar: state.UIAnimation.homeToolbar,
  };
};
export default connect(mapStateToProps, { classification })(Collections);
