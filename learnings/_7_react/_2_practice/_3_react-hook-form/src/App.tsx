import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Form1 from './pages/Form1'

import './App.css'
import Form2Yup from './pages/Form2Yup'
import Form3Zod from './pages/Form3Zod'
import Form4Mui from './pages/Form4Mui'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form1' element={<Form1 />} />
        <Route path='/form2' element={<Form2Yup />} />
        <Route path='/form3' element={<Form3Zod />} />
        <Route path='/form4' element={<Form4Mui />} />
      </Routes>
    </>
  )
}

export default App