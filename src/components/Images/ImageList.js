import React, { useState } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard/Image-Card";
import useModal from "../../HOC/useModal";
import ModalContent from "../Modals/simpleModal/ModalContent";
import Spinner from "../UI/Spinner";
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
      <ModalContent
        liked={props.liked}
        indv={props.indv}
        id={selectedImage}
        close={close}
      />
    </Modal>
  ) : null;

  let show = images;

  if (!props.images) 
    show = <div className="flex justify-center"><Spinner /></div> ;

  return (
    <div onClick={selectImage} className="Images-List">
      {show}
      {modal}
    </div>
  );
};

export default ImageList;
