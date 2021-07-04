import React from 'react'
import classes from './Collections.module.css'
import {classification}from '../../Redux/Actions'
import { connect } from 'react-redux'
const Collections = (props) => {
    console.log(props.classificationName);
    return (
        <div className={classes.collection}>
            <nav className="">
                <ul className="flex capitalize  justify-around items-center">
                    <li className={`cursor-pointer ${props.classificationName=== 'book' ? 'activeee':""}`} onClick={props.classification.bind(null,'book')}>Book</li>
                    <li className={`cursor-pointer ${props.classificationName=== 'food' ? 'activeee':""}`} onClick={props.classification.bind(null,'food')}>Food</li>
                    <li className={`cursor-pointer ${props.classificationName=== 'Animals' ? 'activeee':""}`} onClick={props.classification.bind(null,'Animals')}>Animals</li>
                    <li className={`cursor-pointer ${props.classificationName=== 'programming' ? 'activeee':""}`} onClick={props.classification.bind(null,'programming')}>programming</li>
                </ul>
            </nav>
        </div>
    )
}
const mapStateToProps =state=>{
    console.log(state);
    return {
        classificationName:state.classificationName.term
    }
}
export default connect(mapStateToProps,{classification})(Collections);
