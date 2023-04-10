import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Content from './components/Content'

function App() {


  return (
    <div className="App">
      <Header>
          <div class="radio-inputs">
            <label class="radio">
              <input type="radio" name="radio"/>
              <span class="name">Produtos</span>
            </label>
                
            <label class="radio">
              <input type="radio" name="radio"/>
              <span class="name">Localizações</span>
            </label>
        </div>
      </Header>
      <div className='container-body'>
        <Sidebar/>
        <Content>
            
        </Content>
      </div>

    </div>
  )
}

export default App
