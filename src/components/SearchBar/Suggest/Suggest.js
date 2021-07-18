import React from "react";
import classes from "./Suggest.module.css";
import history from '../../../history'
const Suggest = (props) => {
  let icon = null;
  if (props.icon) icon = <span className="mr-2 ">{props.icon}</span>;

  return (
    <div onClick={()=>history.push("/search/"+props.title)} className={classes.suggestContainer}>
      {icon}
      {props.title}
      <i onClick={()=>{
        
      }} className="fas fa-times"></i>
    </div>
  );
};

export default Suggest;
