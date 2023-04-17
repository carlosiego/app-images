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
    const [msgUpdate, setMsgImageUpdate] = useState("")

    const UpdateImageLocation = async e => {
        
        e.preventDefault()

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
            setMsgImageUpdate(resJson.mensagem)
        })
        .catch((err) => console.log(err))
    }

    return(
        <form onSubmit={UpdateImageLocation}>
        <div>
            <label className="label" for="codeCurrentUpdate">Código Atual: </label><br /><br />
            <input type="text" id="codeCurrentUpdate" onChange={e => setCodeCurrentUpdate(e.target.value)} required/><br/><br/>
        </div>
            <label className="label" for="newCodUpdate">Novo Código: </label><br /><br />
            <input type="text" id="newCodUpdate" onChange={e => setNewCodUpdate(e.target.value)} /><br/><br/>
        <div>
            <label className="label" for="storehouseUpdate">Deposito: </label><br /><br />
            <input type="text" id="storehouseUpdate" onChange={e => setStoreHouseUpdate(e.target.value)} /><br/><br/>
        </div>
        <div>
            <label className="label" for="streetUpdate">Rua: </label><br /><br />
            <input type="text" id="streetUpdate" onChange={e => setStreetUpdate(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label className="label" for="sideUpdate">Lado: </label><br /><br />
            <input type="text" id="sideUpdate" onChange={e => setSideUpdate(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label className="label" for="shelfUpdate">Prateleira: </label><br /><br />
            <input type="text" id="shelfUpdate" onChange={e => setShelfUpdate(e.target.value)}/><br/><br/>
        </div>
        <div>
            <label className="label" for="columnUpdate">Coluna: </label><br /><br />
            <input type="text" id="columnUpdate" onChange={e => setColumnUpdate(e.target.value)}/><br/><br/>
        </div>
        
        <div>
            <label className="label" for="descriptionUpdate">Descrição: </label><br /><br />
            <input type="text" id="descriptionUpdate" onChange={e => setDescriptionUpdate(e.target.value)}/><br/><br/>
        </div>
        <p>{msgUpdate}</p>
        
        <button type="submit">Alterar</button>
    </form>
    )
}