import React from "react";
import classes from "./Suggest.module.css";
const Suggest = (props) => {
  let icon = null;
  if (props.icon) icon = <span className="mr-2 ">{props.icon}</span>;

  return (
    <div className={classes.suggestContainer}>
      {icon}
      {props.title}
    </div>
  );
};

export default Suggest;
