// import { useState } from 'react'
import { Routes, Route, NavLink } from "react-router-dom"
import Week1 from "./pages/Week1"
import Week2 from './pages/Week2'
import Week3 from './pages/Week3'

function App() {

  const style = ({ isActive }) => {
    return {
      color: isActive ? 'blue' : ''
    }
  }

  return (
    <>
      <div>
        <NavLink to="/" style={style}>第一週作業</NavLink> |
        <NavLink to="/week2" style={style}>第二週作業</NavLink> |
        <NavLink to="/week3" style={style}>第三週作業</NavLink> | 
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Week1 />}></Route>
        <Route path="/week2" element={<Week2 />}></Route>
        <Route path="/week3" element={<Week3 />}></Route>
      </Routes>
    </>
  )
}

export default App
