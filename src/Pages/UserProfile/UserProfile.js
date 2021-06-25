import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import classes from "./UserProfile.module.css";
import { getUserPhotos,getUserLiked } from "../../Redux/Actions";
import ImageList from "../../components/Images/ImageList";
import { connect } from "react-redux";
const UserProfile = (props) => {
  const userInfo = useLocation().state;
  console.log(userInfo);
  useEffect(() => {
    props.getUserPhotos(userInfo.username);
  });
  const [showLiked, setShowLiked] = useState(false);
  const [activeLink,setActiveLink] = useState('photos');

  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-center my-8 mb-10 p-4 items-top">
          <div className=" flex-end ">
            <img
              className=" w-32 rounded-full"
              src={userInfo.profile_image}
              alt="profile"
            />
          </div>
          <div className=" w-80 px-6">
            <h1 className="text-2xl font-bold ">{userInfo.username}</h1>
            <div className={classes.dec}>{userInfo.bio}</div>
          </div>
        </div>
      </div>
      <div className={classes.hr}>
        <nav className="flex justify-start">
          <ul className="flex justify-center items-center">
            <li  onClick={()=>{
                setActiveLink('photos');
                setShowLiked(false);
            }} className={`ml-7 ${activeLink ==='photos' ?classes.active:''} cursor-pointer py-3`}>
              <i className=" fas fa-image"></i>
              <span className="ml-2 mr-1">Photos</span>
              <span className="font-light">{userInfo.photos}</span>
            </li>
            <li onClick={()=>{
                setActiveLink('liked');
                props.getUserLiked(userInfo.username)
                setShowLiked(true);
            }} className={`ml-10 py-3 cursor-pointer ${activeLink ==='liked' ?classes.active:''}`}>
              <i className="fas fa-heart"></i>
              <span className="ml-2 mr-1">Likes</span>
              <span className="font-light">{userInfo.likes}</span>
            </li>
          </ul>
        </nav>
      </div>
      <main className="my-5">
        {showLiked ? (
          <ImageList indv={false} liked={true} images={props.liked || []} />
        ) : (
          <ImageList indv={true} images={props.images || []} />
        )}
      </main>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    images: state.UnsplashReducer.individualPhotos,
    liked:state.UnsplashReducer.liked
  };
};
export default connect(mapStateToProps, { getUserPhotos,getUserLiked })(UserProfile);
