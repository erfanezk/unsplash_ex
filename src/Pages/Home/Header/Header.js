import React from 'react'
import Title from '../Title/Title'
import Toolbar from '../../../components/Toolbar/Toolbar'
import classes from './Header.module.css'
const Header = (props) => {
    return (
       <header className={classes.header}>
          <div>
             <Title />
          </div>
          <Toolbar toggler={props.SideDrawerToggler}/>
       </header>
    )
}

export default Header
