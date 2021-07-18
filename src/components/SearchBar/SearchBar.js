import React, { useRef, useEffect, useState } from "react";
import classes from "./SearchBar.module.css";
import history from "../../history";
import Suggest from "./Suggest/Suggest";
const submit = (e, value) => {
  e.preventDefault();
  if (localStorage.getItem("searchHistory") === null) {
    localStorage.setItem("searchHistory", JSON.stringify([value]));
  } else {
    let searchedValues = JSON.parse(localStorage.getItem("searchHistory"));
    searchedValues = [...searchedValues, value];
    localStorage.setItem("searchHistory", JSON.stringify(searchedValues));
  }
  history.push("/search/"+value);
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
  const [items, setItems] = useState([]);
  const deleteItemFromLocalStorage = (deleteItem)=>{
    let searchedValues = JSON.parse(localStorage.getItem("searchHistory"));
    searchedValues = searchedValues.filter(item=>item===deleteItem);
    localStorage.setItem("searchHistory", JSON.stringify(searchedValues));
  }
  useEffect(() => {
    let searchedValues = JSON.parse(localStorage.getItem("searchHistory"));
    setItems(searchedValues);
  }, [localStorage]);

  return (
    <div>
      <form
        onSubmit={(e) => submit(e, searchRef.current.value)}
        className={classes.searchContainer}
      >
        <i className="fas fa-search"></i>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search free high-resolution photos"
          onFocus={() => {
            selectRef.current.classList.remove(classes.none);
            selectRef.current.classList.add(classes.suggestions);
          }}
        />
        <div ref={selectRef} className={classes.none}>
        <i onClick={()=>{
          selectRef.current.classList.add(classes.none);
          selectRef.current.classList.remove(classes.suggestions);
        }} className="fas fa-times"></i>
          <div>
            <h3 className={classes.header}>Recently</h3>
            <ul className={classes.items}>
              {items.map((item) => (
                <li key={item}>
                  <Suggest close={true} title={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
