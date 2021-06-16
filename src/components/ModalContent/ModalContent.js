import React from "react";
import classes from "./Modal.module.css";
import { connect } from "react-redux";

function imageOrientation(src) {
  var orientation,
    img = new Image();
  img.src = src;

  if (img.naturalWidth > img.naturalHeight) {
    orientation = "landscape";
  } else if (img.naturalWidth < img.naturalHeight) {
    orientation = "portrait";
  } else {
    orientation = "even";
  }

  return orientation;
}
const Modal = (props) => {
 
  const typeOfImage = imageOrientation(props.item.urls.regular);
  return (
    <div
      className={`left-0 ${typeOfImage==='landscape' ?'lg:w-auto':'lg:w-3/4'} ${classes.modalBody} overflow-x-hidden  lg:left-1/2 transform lg:mt-6 lg:-translate-x-1/2 top-0 fixed z-50 w-full    bg-white`}
    >
      <div >
        <header
          className={`px-5 lg:px-10 pt-4 pb-0 sticky ${classes.header}  top-0`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-end">
              <div><img src={props.item.user.profile_image.small} alt="profile"/></div>
              <div className="ml-3">{props.item.user.name}</div>
            </div>
            <div className="text-lg">
              <i
                onClick={() => {
                  document.body.classList.remove("modalOpen");
                  props.close();
                }}
                className="far text-xl cursor-pointer fa-times-circle"
              ></i>
            </div>
          </div>

          <div className={classes.insta}>
            @{props.item.user.instagram_username}
          </div>
        </header>
        <div className={`${classes.imgC} w-full `}>
          <img
            src={props.item.urls.regular}
            className={`${classes.img} ${typeOfImage==='landscape' ? '':'w-96 mx-auto'}`}
            alt={props.item.alt_description}
          />
        </div>
        <div className="lg:px-10">
          <div className="p-5">
            <span className="font-bold">bio: </span> {props.item.user.bio}
          </div>
          <div className={classes.dec}>
            <span className="capitalize text-sm mr-2">updated At</span>
            {props.item.user.updated_at}
            <div>
              <span className="capitalize text-sm mr-2">published on</span>
              {props.item.created_at}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state, props) => {
  return {
    item: state.UnsplashReducer.Unsplash[props.id],
  };
};
export default connect(mapStateToProps, null)(Modal);
