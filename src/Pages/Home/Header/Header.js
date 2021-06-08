import React from 'react'
import Title from '../Title/Title'
import Toolbar from '../../../components/Toolbar/Toolbar'
import classes from './Header.module.css'
import { connect } from 'react-redux';
import image from '../../../assets/piyush-dubey-XNf4uAnkdn0-unsplash.jpg'
const Header = (props) => {
   const img = props.backgroundImage ? props.backgroundImage : image
   const style={
      backgroundImage: `linear-gradient(to right bottom, #31d17983, #40d0776c, #4cd07652, #5fce7188),
      url(${img})`
   }
    return (
       <header style={style} className={classes.header}>
          <div>
             <Title />
          </div>
          <Toolbar toggler={props.SideDrawerToggler}/>
       </header>
    )
}
const mapStateToProps = state=>{
   return {
      backgroundImage:state.UiReducer.backgrundImage
   }
}
export default connect(mapStateToProps,null)(Header)
