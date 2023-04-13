import './index.css'
import { useState } from 'react'
import api from '../../../config/configApi'

export default function PostProducts() {

    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")
    const [msgUpload, setMsgUpload] = useState('')
    const [collorMessageUpload, setCollorMessageUpload] = useState('')

    const uploadImage = async e => {
        e.preventDefault()
        setMsgUpload(
          <svg className='iconLoad' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        )
        
        const formData = new FormData();
        formData.append('image', image)
        formData.append('video', url)
        // multipart/form-data
        const headers = {
          'headers': {
            'Content-Type': 'multipart/form-data'
          }
        }

        await api.post('/images/products', formData, headers) 
        .then((res) => {
          setMsgUpload(res.data.mensagem)
          setCollorMessageUpload('#119DA4')
        }).catch(err => {
          setMsgUpload(err.response.data.mensagem)
          setCollorMessageUpload('#BF211E')
        })
      }
    

    return(
        <form onSubmit={uploadImage}>
          <label for="file-input" class="drop-container">
            <span className="drop-title">Imagem:</span><br/><br/>
            <input type="file" onChange={e => setImage(e.target.files[0])} required className="input-upload-products"/>
          </label><br/><br/>
          <label for="file-input" class="drop-container">
            <span className="drop-title">Url Video:</span><br/><br/>
            <input type="url" onChange={e => setUrl(e.target.value)} className="input-upload-products"/>
          </label><br/><br/>
          <span style={{ color: collorMessageUpload, fontSize: 17 }}>{msgUpload}</span><br/><br/> 
          <button class="download-button" type="submit">
            <div class="docs">
              <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Enviar</div>
              <div class="download">
              <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
            </div>
          </button> 
        </form>
    )
}
