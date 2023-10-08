import { useState, useContext} from 'react'
import './App.css'
import NavbarMain from './components/layout/NavbarMain'
import Main from './components/Main'
import NavContextPro from './context/NavLayout/NavContextPro'
import { Route, Routes, Link } from 'react-router-dom'
import { Layout, Typography, Space } from 'antd'
import { NavContext } from './context/NavLayout/NavContextPro'
import Footer from './components/layout/Footer'
function App() {


  return (
    <>
      <NavContextPro>


        <div className='app'>
       
            <NavbarMain />
         

          <Main />


        </div>
        <Footer />
      </NavContextPro>

    </>
  )
}

export default App
