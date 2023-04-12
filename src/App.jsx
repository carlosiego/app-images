import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

import GetProducts from './components/Products/GetProducts'
import PostProducts from './components/Products/PostProducts'
import PutProducts from './components/Products/PutProducts'
import DeleteProducts from './components/Products/DeleteProducts'

import PostLocations from './components/Locations/PostLocations'
import GetLocations from './components/Locations/GetLocations'
import PutLocations from './components/Locations/PutLocations'
import DeleteLocations from './components/Locations/DeleteLocations'

function App() {

  const [action, setAction] = useState('post')
  const [field, setField] = useState('products')
  const [defaultCheckedAction, setDefaultCheckedAction] = useState(true)
  const [defaultCheckedField, setDefaultCheckedField] = useState(true)

  useEffect(() => {
    setDefaultCheckedAction(null)
    
  }, [action])

  function handleChangeField(){
    setDefaultCheckedField(true)
    setAction('post')
  }

  return (

    <div className="App">
      <Header>
            <div class="radio-inputs" onClick={handleChangeField}>
                <label className="radio">
                  <input type="radio" name="radio" onClick={() => setField('products')} checked={defaultCheckedAction}/>
                  <span className="name">Produtos</span>
                </label>
                        
                <label className="radio">
                  <input type="radio" name="radio"  onClick={() => setField('locations')} />
                  <span className="name">Localizações</span>
                </label>
            </div>  
      </Header>
      
      <div className='container-body'>
        <div className='container-sidebar'>
            <div className="radio-inputs-action" onClick={() => setDefaultCheckedField(null)}>

                <label className="radio-action">
                    <input type="radio" name="radio-action" onClick={() => setAction('post')} checked={defaultCheckedField}/>
                    <span className="name">Salvar</span>
                </label>

                <label className="radio-action">
                    <input type="radio" name="radio-action" onClick={() => setAction('get')}/>
                    <span className="name">Visualizar</span>
                </label>

                <label className="radio-action">
                    <input type="radio" name="radio-action" onClick={() => setAction('put')}/>
                    <span className="name">Modificar</span>
                </label>

                <label className="radio-action">
                    <input type="radio" name="radio-action" onClick={() => setAction('delete')}/>
                    <span className="name">Deletar</span>
                </label>

            </div>
        </div>
        <Content>
          {
            field === 'products' ? 
            action === 'post' ? <PostProducts /> :
            action === 'get' ? <GetProducts /> :
            action === 'put' ? <PutProducts/> : 
            action === 'delete' ? <DeleteProducts /> : '' : 

            action === 'post' ? <PostLocations /> : 
            action === 'get' ? <GetLocations /> : 
            action === 'put' ? <PutLocations /> : 
            action === 'delete' ? <DeleteLocations /> : ''
          }
        </Content>
      </div>
    </div>
  )
}

export default App
