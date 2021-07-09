import React, { useRef } from 'react'
import classes from './SearchBar.module.css';
import history from '../../history';
const submit =(e,value)=>{
    e.preventDefault();
    console.log(value);
    history.push('/search/'+value)
}
const SearchBar = () => {
    const searchRef = useRef();
    return (
        <div>
            <form onSubmit={(e)=>submit(e,searchRef.current.value)} className={classes.searchContainer}>
            <i className="fas fa-search"></i> <input ref={searchRef} type='text' placeholder='Search free high-resolution photos'/>
            </form>
        </div>
    )
}

export default SearchBar
