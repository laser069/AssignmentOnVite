import { useState } from 'react'
import axios from "axios"
import Home from './Home'
import {Routes,Route} from "react-router-dom"
import './App.css'

function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
      </Routes>

    </>
  )
}

export default App
