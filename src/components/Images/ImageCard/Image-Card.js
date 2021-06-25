import React from "react";
import classes from "./imageCard.module.css";
import {Link} from 'react-router-dom'
function handleIntersection(entries) {
  // eslint-disable-next-line array-callback-return
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("lazyload");
      entry.target.classList.add("loaded");
    }
  });
}

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      observer: new IntersectionObserver(handleIntersection, {
        threshold: 0.9,
      }),
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.state.observer.observe(this.imageRef.current);
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  componentWillUnmount() {
    this.state.observer.unobserve(this.imageRef.current);
  }

  render() {
    console.log(this.props.img);
    return (
      <div className={classes.imageCardContainer}>
        <img
          onClick={this.props.click}
          className="lazyload"
          ref={this.imageRef}
          alt={this.props.img.description}
          src={this.props.img.urls.regular}
        />
        {/* <div className={classes.dec}>
          <div className="mt-5 text-xs">created by <span className="text-lg font-bold">{this.props.img.user.name}</span> </div>
          <div className=" text-xs">located in <span className="text-lg font-bold">{this.props.img.user.location}</span>  </div>
        </div> */}
        <div      data-id={this.props.index} className={classes.overlay}>

        </div>
        <div className={classes.icons}>
          <i className="fa fa-heart"></i>
          <i className="fas fa-plus"></i>
        </div>
        <div className={classes.info}>
          <Link className="flex items-center" to={{
              pathname:`/user-profile/${this.props.img.user.username}`,
              state:{
                username:this.props.img.user.username,
                bio:this.props.img.user.bio,
                location:this.props.img.user.location,
                photos:this.props.img.user.total_photos,
                likes:this.props.img.user.total_likes,
                profile_image:this.props.img.user.profile_image.large
              }
              
            }}>
            <img className="rounded-full mr-3" src={this.props.img.user.profile_image.small}/>
            <div>
              {this.props.img.user.username}
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
export default ImageCard;
