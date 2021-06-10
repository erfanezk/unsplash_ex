import React from "react";
import disert from "../../assets/marek-piwnicki-zZTwuBz74iI-unsplash.jpg";
import ger from "../../assets/jeremy-zero-rLVY6LLqalQ-unsplash.jpg";
import ember from "../../assets/eberhard-grossgasteiger-fcrSsepzDzg-unsplash.jpg";
import bozi from "../../assets/bozidar-vukadinovic-sNWMhlgfR3g-unsplash.jpg";
import zdek from "../../assets/zdenek-machacek-OlKkCmToXEs-unsplash.jpg";
import damn from "../../assets/damien-schnorhk-fVBWN3_ST0E-unsplash.jpg";
import james from "../../assets/james-donovan-kFHz9Xh3PPU-unsplash.jpg";
import sepn from "../../assets/spencer-bergen-bmqyS0HXV70-unsplash.jpg"
import { connect } from "react-redux";
import { changeHomeImage } from "../../Redux/Actions";
import Bg from "./Bg/Bg";
const Customize = (props) => {
  const images = [disert, ger, ember, bozi, zdek,damn,james,sepn];
  const backgrounds = images.map((item) => <Bg imageSrc={item} />);
  return (
    <div
      className={`left-0 lg:w-1/2 p-4 top-1/2 lg:left-1/2 transform lg:top-1/2 lg:mt-6 lg:-translate-x-1/2 -translate-y-1/2  fixed z-50 w-full bg-white`}
      onClick={(e) => {
        if (e.target.nodeName === "IMG") props.close();
      }}
    >
      <article>
        <div>
          <header className="flex bg-green py-3 my-1">
            <div style={{ flexBasis: "150px" }}></div>
            <div className="flex-1">Customize this page
                </div>
          </header>
          <div className="flex mt-3 overflow-hidden">
            <div style={{ flexBasis: "150px" }} className="">
              <ul className="flex flex-col  ">
                <li className="capitalize cursor-pointer mb-3"><i className="fas mr-3 fa-image"></i>background</li>
                <li className="capitalize cursor-pointer mb-3"><i className="fas mr-3 fa-location-arrow"></i>shortcutes</li>
                <li className="capitalize cursor-pointer mb-3"><i className="fas mr-3 fa-fill-drip"></i>color and theme</li>
              </ul>
            </div>
            <div style={{height:'372px'}} className="lg:grid overflow-y-auto lg:gap-x-2 lg:gap-y-5 flex-1  flex flex-col lg:grid-cols-3">{backgrounds}</div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default connect(null, { changeHomeImage })(Customize);
