import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {



  return (

    <div className="App">
      <Header/>
      <div className='container-body'>
        <Sidebar/>
        <Content>
        </Content>
      </div>
    </div>
  )
}

export default App
