import React from "react";
function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('lazyload')
      entry.target.classList.add('loaded');
    }
  });
}

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0,observer:new IntersectionObserver(handleIntersection,{
      threshold:0.90
    }) };
    this.imageRef = React.createRef();
  }

  componentDidMount() {

    this.state.observer.observe(this.imageRef.current)
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current?.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  
  componentWillUnmount(){
    this.state.observer.unobserve(this.imageRef.current)
  }

  render() {

    return (
      <div
        onClick={this.props.click}
        style={{ gridRowEnd: `span ${this.state.spans}` }}
      >
        <img
          data-id={this.props.index}
          className="lazyload"
          ref={this.imageRef}
          alt={this.props.img.description}
          src={this.props.img.urls.regular}
        />
      
      </div>
    );
  }
}
export default ImageCard;
