import React, { useContext } from 'react'
import { CountriesProvider } from './context/CountriesContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ThemeContext } from "./context/ThemeContext";
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main/Main'
import SingleCountry from './pages/SingleCountry/SingleCountry'


function App() {
  const {theme} = useContext(ThemeContext)

  return (
    <div className={`${theme === "light" ? "light" : "dark"} App`}>
      <CountriesProvider>
        <Navbar />
        <Routes>
          <Route path='/' axact element={<Main />} />
          <Route path='/:name' element={<SingleCountry />} />    
        </Routes>        
        <Footer />
      </CountriesProvider>
    </div>
  )
}

export default App
