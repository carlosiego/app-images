import './index.css'
import { useState } from 'react'

export default function PostLocations() {

    const [imageLocation, setImageLocation] = useState("")
    const [storehouse, setStoreHouse] = useState("")
    const [street, setStreet] = useState("")
    const [side, setSide] = useState("")
    const [shelf, setShelf] = useState("")
    const [column, setColumn] = useState("")
    const [description, setDescription] = useState("")
    const [status, setStatus] = useState("")
    const [preview, setPreview] = useState("")
    const [colorStatus, setColorStatus] = useState("#119DA4")

    const uploadImageLocations = async e => {
        e.preventDefault()
        setPreview(URL.createObjectURL(e.target.files[0]))
        setStatus(
            <svg className='iconLoad' viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
            </svg>
        )

        let formData = new FormData()

        formData.append('image', imageLocation)
        formData.append('storehouse', storehouse)
        formData.append('street', street)
        formData.append('side', side)
        formData.append('shelf', shelf)
        formData.append('column', column)
        formData.append('description', description)
        
        let headers = {
            'headers': {
                'Content-Type': 'multipart/form-data'
            },
        }

        await api.post('/images/locations', formData, headers) 
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <>
            <form onSubmit={uploadImageLocations} className='form-upload-locations'>
                <label for="file-input" >
                    <span className="label-locations-upload">Imagem:</span><br/><br/>
                    <input type="file" onChange={e => setImageLocation(e.target.files[0])} required className="input-locations-upload"/>
                </label><br/>
                <label for="storehouse">
                    <span className='label-locations-upload'>Deposito: </span><br /><br />
                    <input type="text" id="storehouse" onChange={e => setStoreHouse(e.target.value)} required/><br/><br/>
                </label>
                <label for="street">
                    <span className='label-locations-upload'>Rua: </span><br /><br />
                    <input type="text" id="street" onChange={e => setStreet(e.target.value)}/><br/><br/>
                </label>
                <label for="side">
                    <span className='label-locations-upload'>Lado: </span><br /><br />
                    <input type="text" id="side" onChange={e => setSide(e.target.value)}/><br/><br/>
                </label>
                <label for="shelf">
                    <span className='label-locations-upload'>Prateleira: </span><br /><br />
                    <input type="text" id="shelf" onChange={e => setShelf(e.target.value)}/><br/><br/>
                </label>
                <label for="column">
                    <label className='label-locations-upload'>Coluna: </label><br /><br />
                    <input type="text" name="column" onChange={e => setColumn(e.target.value)}/><br/><br/>
                </label>
                <label for="description">
                    <span className='label-locations-upload'>Descrição: </span><br /><br />
                    <input type="text" name="description" onChange={e => setDescription(e.target.value)}/><br/><br/>
                </label>
                <span style={{ color: colorStatus, fontSize: 17 }}>{status}</span><br/>
                <button type="submit">Cadastrar</button>
            </form>
            <div className="container-preview-upload-locations">
                {imageLocation && <img className='img-preview-upload-products' src={preview}/>}
            </div>
        </>
    )
}