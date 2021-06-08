import React, { useState } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard/Image-Card";
import useModal from "../../HOC/useModal";
import ModalContent from "../ModalContent/ModalContent";

const ImageList = (props) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: false,
  });
  const [selectedImage, setSelectedImage] = useState();
  const images = props.images.map((img, index) => {
    return <ImageCard index={index} key={img.id} img={img} />;
  });

  const selectImage = (e) => {
    if (e.target.dataset["id"]) {
      setSelectedImage(e.target.dataset["id"]);
      open();
    }
  };
  const modal = selectedImage ? (
    <Modal>
      <ModalContent id={selectedImage} close={close} />
    </Modal>
  ) : null;

  return (
    <div onClick={selectImage} className="Images-List">
      {images}
      {modal}
    </div>
  );
};

export default ImageList;
