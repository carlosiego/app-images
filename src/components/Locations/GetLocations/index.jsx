import './index.css'
import { useState } from 'react'

export default function GetLocations(){

    const [ codelocation, setCodelocation ] = useState('')
    const [ urlImage, setUrlImage ] = useState('')
    const [ status, setStatus ] = useState('')
    
    const [ storeHouse, setStoreHouse ] = useState('')
    const [ street, setStreet ] = useState('')
    const [ side, setSide ] = useState('')
    const [ shelf, setShelf ] = useState('')
    const [ column, setColumn ] = useState('')
    const [ description, setDescription ] = useState('')

    const getImage = async e => {
        e.preventDefault()
        setStatus(
            <svg className='iconLoad' viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        )
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_SECRET_API}/images/locations/code/${codelocation}`)
        .then(res => res.json())
        .then(resJson => {
            if(resJson.error){
                setUrlImage('')
                setStatus(resJson.message)
            }else{
                setUrlImage(resJson.url)
                setStatus('')
                setStoreHouse(resJson.image.storehouse)
                setStreet(resJson.image.street)
                setSide(resJson.image.side)
                setShelf(resJson.image.shelf)
                setColumn(resJson.image.column)
                setDescription(resJson.image.description)
            }
        })
        .catch( () => {
            setStatus('Erro, servidor offline!')
            setUrlImage('')
        })
    }

    return(
        <>
        <form className='container-form-get-locations' onSubmit={getImage}>
            <label for="file-input">
                <span className="label">Código:</span><br/><br/>
                <input type="number" onChange={e => setCodelocation(e.target.value)} required className="input-locations-get"/>
            </label><br/>
            {status && <span style={{color: '#BF211E', marginBottom: 10}}>{status}</span>}
            
            <button className="btn-submit-get-locations" type="submit">
                <div className="text-btn-submit-get-locations">
                    <svg className="css-i6dzq1" stroke-linejoin="round" stroke-linecap="round" fill="none" stroke-width="2" stroke="currentColor" height="20" width="20" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line y2="13" x2="8" y1="13" x1="16"></line><line y2="17" x2="8" y1="17" x1="16"></line><polyline points="10 9 9 9 8 9"></polyline></svg> 
                    Ver
                </div>
            </button> 
        </form>
        <div className='container-result-get-prods'>
            { urlImage && <img src={urlImage} style={{width: 250, height: 250}} />}<br/>
            { urlImage && <span className='container-result-infos-get-locations'>
                <p>Deposito: <span className='infos-get-locations'>{storeHouse}</span></p>
                <p>Rua: <span className='infos-get-locations'>{street}</span></p>
                <p>Lado: <span className='infos-get-locations'>{side}</span></p>
                <p>Prateleira: <span className='infos-get-locations'>{shelf}</span></p>
                <p>Coluna: <span className='infos-get-locations'>{column}</span></p>
                <p>Descrição: <span className='infos-get-locations'>{description}</span></p>
            </span>}
        </div>
    </> 
    )
}