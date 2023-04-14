import './index.css'
import { useState } from 'react'
import api from '../../../config/configApi'

export default function PostProducts() {

    const [image, setImage] = useState("")
    const [urlVideo, setUrlVideo] = useState("")
    const [status, setStatus] = useState('')
    const [colorStatus, setColorStatus] = useState('')
    const [preview, setPreview] = useState('')
// ============================= HANDLE CHANGE IMAGE ======================================================================================

    const handleChangeImage = e => {
      setImage(e.target.files[0])
      setPreview(URL.createObjectURL(e.target.files[0]))
    }

// ============================= UPLOAD IMAGE ======================================================================================

    const uploadImage = async e => {
        e.preventDefault()

        setStatus(
          <svg className='iconLoad' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>
        )
        
        const formData = new FormData();
        formData.append('image', image)
        formData.append('video', urlVideo)
        // multipart/form-data
        const headers = {
          'headers': {
            'Content-Type': 'multipart/form-data'
          }
        }

        await api.post('/images/products', formData, headers) 
        .then((res) => {
          setStatus(res.data.mensagem)
          setColorStatus('#119DA4')
        }).catch(err => {
          setStatus(err.response.data.mensagem)
          setColorStatus('#BF211E')
        })
      }
    

    return(
      <div className='container-upload-products'>
        <form onSubmit={uploadImage} className='container-form-upload-products'>
          <label for="file-input" >
            <span className="label-prods-upload">Imagem:</span><br/><br/>
            <input type="file" onChange={handleChangeImage} required className="input-prods-upload"/>
          </label><br/>
          <label for="file-input" >
            <span className="label-prods-upload">Url Video:</span><br/><br/>
            <input type="url" onChange={e => setUrlVideo(e.target.value)} className="input-prods-upload"/>
          </label><br/>
          <span style={{ color: colorStatus, fontSize: 17 }}>{status}</span><br/><br/> 
          <button class="download-button" type="submit">
            <div class="docs">
              <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> Enviar</div>
              <div class="download">
              <svg class="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="24" width="24" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line y2="3" x2="12" y1="15" x1="12"></line></svg>
            </div>
          </button> 
        </form>
        <div className="container-preview-upload-products">
          {image && <img className='img-preview-upload-products' src={preview}/>}
        </div>
      </div>
    )
}
