import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import './App.css'
import { useState } from 'react'

export const ThemeContext=React.createContext({} as { theme: string, setTheme: any });

const App = () => {
 
  const [theme,setTheme]=useState("Light")
  
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
    <div>
      <Header/>
      <Hero/>
    </div>
    </ThemeContext.Provider> 
  )
}

export default App

