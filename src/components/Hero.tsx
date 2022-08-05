import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App'
import { AppTheme } from '../AppTheme'
import Starpline from './Starpline'

const Hero = () => {
  const {theme}=useContext(ThemeContext)
  const herostyle:AppTheme={
    dark:{
      backgroundColor:"black",
      color:"White"
    },
    light:{
      backgroundColor:"White",
      color:"black"
    },
    common:{
      height:"1400px"
    }
  }

  const themeStyle={
    ...herostyle.common,
    ...(theme==="light" ? herostyle.light:herostyle.dark)
  }
  return (
  <>
  <main style={themeStyle}>
    <div>
      <h1> We make great coffee </h1>
      <Starpline/>
    </div>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6i3A5bJ_knKHOI1Xhc8kdxN5gt1K0wYjh5w&usqp=CAU' alt='Coffee shop'/>
  </main>
  </>
  )
}

export default Hero