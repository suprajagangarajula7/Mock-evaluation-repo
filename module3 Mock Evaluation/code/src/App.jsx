import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TheamContext } from './Context/TheamContext'
import PostList from './Components/PostList'

function App() {
  const {theam, toggleTheam}=useContext(TheamContext)

  return (
  <div className={`app ${theam}`}>
    <button className='theam-btn' onClick={toggleTheam}>Switch Theme</button>
    <PostList/>
  </div>
  )
}

export default App
