import React from 'react'
import classes from './Collections.module.css'
import {changeImages}from '../../Redux/Actions'
import { connect } from 'react-redux'
const Collections = (props) => {
    return (
        <div className={classes.collection}>
            <nav className="">
                <ul className="flex capitalize  justify-around items-center">
                    <li className="cursor-pointer" onClick={props.changeImages.bind(null,'book')}>Book</li>
                    <li className="cursor-pointer" onClick={props.changeImages.bind(null,'food')}>Food</li>
                    <li className="cursor-pointer" onClick={props.changeImages.bind(null,'Animals')}>Animals</li>
                    <li className="cursor-pointer" onClick={props.changeImages.bind(null,'programming')}>programming</li>
                </ul>
            </nav>
        </div>
    )
}

export default connect(null,{changeImages})(Collections);
