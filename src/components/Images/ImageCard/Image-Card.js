import React from "react";
import classes from "./imageCard.module.css";
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
  // setSpans = () => {
  //   const height = this.imageRef.current?.clientHeight;
  //   const spans = Math.ceil(height / 10);
  //   this.setState({ spans });
  // };

  componentWillUnmount() {
    this.state.observer.unobserve(this.imageRef.current);
  }
  animateImg = () => {
    this.imageRef.current.classList.add(classes.move);
  };
  render() {
    return (
      <div className={classes.imageCardContainer}>
        <img
          onClick={() => {
            this.props.click();
          }}
          data-id={this.props.index}
          className={`lazyload`}
          ref={this.imageRef}
          alt={this.props.img.description}
          src={this.props.img.urls.regular}
        />
        <div className={classes.dec}>
          <div className="mt-5 text-xs">
            created by{" "}
            <span className="text-lg font-bold">
              {this.props.img.user.name}
            </span>{" "}
          </div>
          <div className=" text-xs">
            located in{" "}
            <span className="text-lg font-bold">
              {this.props.img.user.location}
            </span>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default ImageCard;
