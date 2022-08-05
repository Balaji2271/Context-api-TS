import React, { useContext } from 'react'
import { ThemeContext } from '../App'
import { AppTheme } from '../AppTheme'
import ThemeToggle from './Themetoggle'

const Header = () => {
  const {theme}=useContext(ThemeContext)

  const headerStyle:AppTheme={
    dark:{
      backgroundColor:"black",
      color:"White"
    },
    light:{
      backgroundColor:"White",
      color:"black"
    },
    common:{}
  }

  const themeStyle={
    ...headerStyle,
    ...(theme==="light" ? headerStyle.light:headerStyle.dark)
  }
  return (
    <>
    <header style={themeStyle}>
      <span>
        Myapp
      </span>
      <ThemeToggle/>
    </header>
    </>
  )
}

export default Header