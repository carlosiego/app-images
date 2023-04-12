import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Content from './components/Content'

function App() {

  const [action, setAction] = useState('')
  const [field, setField] = useState('')
  const [defaultCheckedAction, setDefaultCheckedAction] = useState(true)
  const [defaultCheckedField, setDefaultCheckedField] = useState(true)

  useEffect(() => {
    setDefaultCheckedAction(null)
    
  }, [action])


  return (

    <div className="App">
      <Header>
            <div class="radio-inputs" onClick={() => setDefaultCheckedField(true)}>
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
        
        </Content>
      </div>
    </div>
  )
}

export default App
