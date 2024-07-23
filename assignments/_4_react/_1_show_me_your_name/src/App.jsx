import React from 'react'
import './App.css'

const App = () => {

  const showAlert = () => {
    alert("My name is Abhay")
  }

  return (
    <div className='app-cmp'>
      <button onClick={showAlert} type='button' className='btn'>
        Show me your name
      </button>
    </div>
  )
}

export default App