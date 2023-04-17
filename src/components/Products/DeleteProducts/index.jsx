import './index.css'
import { useState } from 'react'

export default function DeleteProducts() {

    const [imageDelete, setImageDelete] = useState("")
    const [status, setStatus] = useState("")
    const [colorStatus, setColorStatus] = useState("")

    const deleteImage = async e => {
      e.preventDefault()
      setStatus(
        <svg className='iconLoad' viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
        </svg>
      )

      await fetch(`${import.meta.env.VITE_API_BASE_URL}/images/products/code/${imageDelete}`, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json'
          },
        })
        .then(res => res.json())
        .then(resJson => {
          setStatus(resJson.mensagem)
          resJson.erro ? setColorStatus('#BF211E') : setColorStatus('#119DA4')
        }).catch(() => {
          setStatus('Erro, servidor offline!')
          setColorStatus('#BF211E')
        })
      }

    return(
        <form onSubmit={deleteImage}>
            <label for="file-input">
                <span className="label">Código:</span><br/><br/>
                <input type="number" onChange={e => setImageDelete(e.target.value)} required className="input-locations-delete"/>
            </label><br/><br/>
            {status && <span style={{color: colorStatus}}>{status}</span>}
            <button className="btn-submit-delete-locations" type="submit">
                <div className="text-btn-submit-delete-locations">
                    Excluir
                </div>
            </button> 
        </form>
    )
}