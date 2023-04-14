import { useState } from 'react'
import './index.css'
import logoYoutube from '../../../assets/icons/youtube.svg'

export default function GetProducts() {

    const [ codeProduct, setCodeProduct ] = useState('')
    const [ urlImage, setUrlImage ] = useState('')
    const [ urlVideo, setUrlVideo ] = useState('')
    const [ status, setStatus ] = useState('')
    
    const getImage = async e => {
        e.preventDefault()
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/images/products/code/${codeProduct}`)
        .then(res => res.json())
        .then(resJson => {
            if(resJson.erro){
                setStatus(resJson.mensagem)
            }else{
                setUrlImage(resJson.urlImage)
                setUrlVideo(resJson.urlVideo)
                setStatus('')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <>
            <form className='container-form-get-prods' onSubmit={getImage}>
                <label for="file-input" className="drop-container">
                    <span className="label-prods-get">Código:</span><br/><br/>
                    <input type="number" onChange={e => setCodeProduct(e.target.value)} required className="input-prods-get"/>
                </label><br/>
                {status && <span style={{color: '#BF211E'}}>{status}</span>}<br/>
                <button className="btn-submit-get-prods" type="submit">
                    <div className="text-btn-submit-get-prods">
                        <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 
                        Ver
                    </div>
            </button> 
            </form>
            <div className='container-result-get-prods'>
                { urlImage && <img src={urlImage} style={{width: 250, height: 250}} />}<br/>
                { urlVideo && <a href={urlVideo} target='_blank'><img src={logoYoutube} alt="React Logo" /></a>}<br/>
                
            </div>
        </> 
    )
}

