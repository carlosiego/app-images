import './index.css'
import { useState } from 'react'

export default function PutLocations() {

    const [codeCurrentUpdate, setCodeCurrentUpdate] = useState("")
    const [newCodUpdate, setNewCodUpdate] = useState("")
    const [storeHouseUpdate, setStoreHouseUpdate] = useState("")
    const [streetUpdate, setStreetUpdate] = useState("")
    const [sideUpdate, setSideUpdate] = useState("")
    const [shelfUpdate, setShelfUpdate] = useState("")
    const [columnUpdate, setColumnUpdate] = useState("")
    const [descriptionUpdate, setDescriptionUpdate] = useState("")
    const [status, setStatus] = useState("")
    const [colorStatus, setColorStatus] = useState('')

    const UpdateImageLocation = async e => {
        e.preventDefault()
        setStatus(
            <svg className='iconLoad' viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        )
        await fetch(`http://localhost:3007/images/locations/code/${codeCurrentUpdate}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code: newCodUpdate,
                storehouse: storeHouseUpdate,
                street: streetUpdate,
                side: sideUpdate,
                shelf: shelfUpdate,
                column: columnUpdate,
                description: descriptionUpdate,
            })
        })
        .then(res => res.json())
        .then(resJson => {
            setStatus(resJson.message)
            resJson.error ? setColorStatus('#BF211E') : setColorStatus('#119DA4')
        })
        .catch(() => {
            setStatus('Erro, servidor offline!')
            setColorStatus('#BF211E')
        })
    }


    return(
        <form className='form-update-locations' onSubmit={UpdateImageLocation}>
            <div>
                <label className="label" for="codeCurrentUpdate">Código Atual: </label><br /><br />
                <input className="input-locations-update" type="number" id="codeCurrentUpdate" onChange={e => setCodeCurrentUpdate(e.target.value)} required/><br/><br/>
            </div>
            <div>
                <label className="label" for="newCodUpdate">Novo Código: </label><br /><br />
                <input className="input-locations-update" type="number" id="newCodUpdate" onChange={e => setNewCodUpdate(e.target.value)} /><br/><br/>
            </div>   
            <div>
                <label className="label" for="storehouseUpdate">Deposito: </label><br /><br />
                <input className="input-locations-update" type="text" id="storehouseUpdate" onChange={e => setStoreHouseUpdate(e.target.value)} /><br/><br/>
            </div>
            <div>
                <label className="label" for="streetUpdate">Rua: </label><br /><br />
                <input className="input-locations-update" type="number" id="streetUpdate" onChange={e => setStreetUpdate(e.target.value)}/><br/><br/>
            </div>
            <div>
                <label className="label" for="sideUpdate">Lado: </label><br /><br />
                <input className="input-locations-update" type="text" id="sideUpdate" onChange={e => setSideUpdate(e.target.value)}/><br/><br/>
            </div>
            <div>
                <label className="label" for="shelfUpdate">Prateleira: </label><br /><br />
                <input className="input-locations-update" type="number" id="shelfUpdate" onChange={e => setShelfUpdate(e.target.value)}/><br/><br/>
            </div>
            <div>
                <label className="label" for="columnUpdate">Coluna: </label><br /><br />
                <input className="input-locations-update" type="number" id="columnUpdate" onChange={e => setColumnUpdate(e.target.value)}/><br/><br/>
            </div>
            <div>
                <label className="label" for="descriptionUpdate">Descrição: </label><br /><br />
                <input className="input-locations-update" type="text" id="descriptionUpdate" onChange={e => setDescriptionUpdate(e.target.value)}/><br/><br/>
            </div>
            <span className='span-status' style={{ color: colorStatus, fontSize: 17 }}>{status}</span><br/>
            <button className="btn-submit-put-locations" type="submit">
                <div className="text-btn-submit-put-locations">
                    Alterar
                </div>
            </button> 
        </form>
    )
}