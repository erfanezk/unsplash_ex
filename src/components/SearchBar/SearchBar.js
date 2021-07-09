import React, { useRef,useEffect } from "react";
import classes from "./SearchBar.module.css";
import history from "../../history";
const submit = (e, value) => {
  e.preventDefault();
  localStorage.setItem("searchHisoty",value);
  history.push("/search/" + value);
};

const SearchBar = () => {
  const searchRef = useRef();
  const selectRef = useRef();
 
  return (
    <div>
      <form
        onSubmit={(e) => submit(e, searchRef.current.value)}
        className={classes.searchContainer}
      >
        <i className="fas fa-search"></i>{" "}
        <input
          ref={searchRef}
          type="text"
          placeholder="Search free high-resolution photos"
          onFocus={()=>{
            selectRef.current.style.height="auto";
            selectRef.current.style.visibility="visible"
           
          }}
          onBlur={()=>{
            selectRef.current.style.height="0px";
            selectRef.current.style.visibility="hidden"
    
          }}
        />
      </form>
      <div ref={selectRef} className={classes.suggestion}>
          <div>
              gehhh
          </div>
          <div>
              gehhh
          </div>
          <div>
              gehhh
          </div>
          <div>
              gehhh
          </div>
      </div>
    </div>
  );
};

export default SearchBar;
