import React, {  useState } from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard/Image-Card";
import Modal from "../Modal/Modal";
import Backdrop from '../Backdrap/Backdrap';


const ImageList = (props) => {



  const [selectedImage,setSelectedImage] = useState();
  const images = props.images.map((img, index) => {
    return (
      <ImageCard index={index}  key={img.id} img={img} />
    );
  });

  const selectImage=(e)=>{
    if(e.target.dataset['id'])
      setSelectedImage(e.target.dataset['id'])
  }
  const modal= selectedImage ? <div>
    <Modal close={()=>setSelectedImage(null)} id={selectedImage}/>
    <Backdrop/>
  </div> : null

  return (
    <div  onClick={selectImage} className="Images-List">
      {images}
      {modal}
    </div>
  );
};
export default React.memo(ImageList);
