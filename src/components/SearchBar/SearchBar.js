import React, { useRef, useEffect } from "react";
import classes from "./SearchBar.module.css";
import history from "../../history";
import Suggest from "./Suggest/Suggest";
const submit = (e, value) => {
  e.preventDefault();
  localStorage.setItem("searchHisoty", value);
  history.push("/search/" + value);
};

const icon = (
  <svg
    width="18"
    height="18"
    class="_1We2V"
    viewBox="0 0 32 32"
    version="1.1"
    aria-hidden="false"
  >
    <path d="M21.2 8L24.177 11.0533L17.833 17.56L12.633 12.2267L3 22.12L4.833 24L12.633 16L17.833 21.3333L26.023 12.9467L29 16V8H21.2Z"></path>
  </svg>
);
const SearchBar = () => {
  const selectRef = useRef();
  const searchRef = useRef();

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
            selectRef.current.classList.remove(classes.none)
            selectRef.current.classList.add(classes.suggestions)
          }}
          onBlur={()=>{
            selectRef.current.classList.add(classes.none);
            selectRef.current.classList.remove(classes.suggestions)
          }}
        />
        <div ref={selectRef} className={classes.none}>
          <div>
            <h3 className={classes.header}>Trending Searches</h3>
            <ul className={classes.items}>
              <li>
                <Suggest icon={icon} title="ganesh" />
              </li>
              <li>
                <Suggest icon={icon} title="israel" />
              </li>
              <li>
                <Suggest icon={icon} title="road" />
              </li>
              <li>
                <Suggest icon={icon} title="holy sprit" />
              </li>
              <li>
                <Suggest icon={icon} title="tea" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className={classes.header}>Trending Topices</h3>
            <ul className={classes.items}>
              <li>
                <Suggest title="fashion" />
              </li>
              <li>
                <Suggest title="history" />
              </li>
              <li>
                <Suggest title="animals" />
              </li>
              <li>
                <Suggest title="exprimental" />
              </li>
              <li>
                <Suggest title="tea" />
              </li>
            </ul>
          </div>
          <div>
            <h3 className={classes.header}>Trending Collections</h3>
            <ul className={classes.items}>
              <li>
                <Suggest title="Lego" />
              </li>
              <li>
                <Suggest title="NH73" />
              </li>
              <li>
                <Suggest title="Surf" />
              </li>
              <li>
                <Suggest title="Retro Cameras" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
