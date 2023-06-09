import './index.css'
import { useState } from 'react'

export default function PutProducts(){


    const [ codeCurrent, setCodeCurrent ] = useState('')
    const [ newCode, setNewCodigo ] = useState('')
    const [ newUrl, setNewUrl ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ colorStatus, setColorStatus ] = useState('')

    const updateImage = async e => {
        e.preventDefault()
        setStatus(
            <svg className='iconLoad' viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        )
        await fetch(`${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_SECRET_API}/images/products/code/${codeCurrent}`,
        {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                code: newCode,
                video: newUrl 
            })
        })
        .then(res => res.json())
        .then(resJson => {
            setStatus(resJson.message)
            resJson.error ? setColorStatus('#BF211E') : setColorStatus('#119DA4')
        }) 
        .catch( () => {
            setStatus('Erro, servidor offline!')
            setColorStatus('#BF211E')
        })
    }


    return(
        <>
            <form onSubmit={updateImage}>
                <label for="file-input">
                    <span className="label">Código:</span><br/><br/>
                    <input type="number" onChange={e => setCodeCurrent(e.target.value)} required className="input-prods-put"/>
                </label><br/><br/>
                <label for="file-input">
                    <span className="label">Novo Código:</span><br/><br/>
                    <input type="number" onChange={e => setNewCodigo(e.target.value)} required className="input-prods-put"/>
                </label><br/><br/>
                <label for="file-input">
                    <span className="label">Nova Url:</span><br/><br/>
                    <input type="url" onChange={e => setNewUrl(e.target.value)} className="input-prods-put" id='input-prods-put-url'/>
                </label><br/>
                {status && <span style={{color: colorStatus}}>{status}</span>}
                <button className="btn-submit-put-prods" type="submit">
                    <div className="text-btn-submit-put-prods">
                        Alterar
                    </div>
                </button> 
            </form>
        </>
    )
}