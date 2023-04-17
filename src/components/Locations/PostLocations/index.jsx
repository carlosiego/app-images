import './index.css'
import api from '../../../config/configApi'
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
    const [colorStatus, setColorStatus] = useState("")

    const handleChangeImagelocation = e => {
       setImageLocation(e.target.files[0])
       setPreview(URL.createObjectURL(e.target.files[0]))

    }


    const uploadImageLocations = async e => {
        e.preventDefault()
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
        .then(res => {
            setStatus(res.data.mensagem)
            setColorStatus('#119DA4')
        })
        .catch(err => {
            if(err.response?.data){
                setStatus(err.response.data.mensagem)
            }else{
                setStatus('Erro, servidor offline!')
                console.log(err)
            }
            setColorStatus('#BF211E')
        })
    }

    return(
        <>
            <form onSubmit={uploadImageLocations} className='form-upload-locations'>
                <label for="file-input" >
                    <span className="label-locations-upload">Imagem:</span>
                    <input type="file" onChange={handleChangeImagelocation} required className="input-locations-upload-file" accept="image/png, image/jpg,"/>
                </label>
                <label for="storehouse">
                    <span className='label-locations-upload'>Deposito: </span><br/>
                    <input className="input-locations-upload" type="text" id="storehouse" required onChange={e => setStoreHouse(e.target.value)}/><br/>
                </label>
                <label for="street">
                    <span className='label-locations-upload'>Rua: </span><br/>
                    <input className="input-locations-upload" type="number" id="street" onChange={e => setStreet(e.target.value)}/><br/>
                </label>
                <label for="side">
                    <span className='label-locations-upload'>Lado: </span><br/>
                    <input className="input-locations-upload" type="text" id="side" onChange={e => setSide(e.target.value)}/><br/>
                </label>
                <label for="shelf">
                    <span className='label-locations-upload'>Prateleira: </span><br/>
                    <input className="input-locations-upload" type="number" id="shelf" onChange={e => setShelf(e.target.value)}/><br/>
                </label>
                <label for="column">
                    <label className='label-locations-upload'>Coluna: </label><br />
                    <input className="input-locations-upload" type="number" name="column" onChange={e => setColumn(e.target.value)}/><br/>
                </label>
                <label for="description">
                    <span className='label-locations-upload'>Descrição: </span><br/>
                    <input id='input-locations-upload-description' type="text" name="description" onChange={e => setDescription(e.target.value)}/><br/>
                </label>
                <span className='span-status-upload-locations' style={{ color: colorStatus, fontSize: 17 }}>{status}</span><br/><br/>
                <button className="btn-submit-upload-locations" type="submit">
                    <div className="text-btn-submit-upload-locations">
                        Salvar
                    </div>
                </button> 
            </form>
            <div className="container-preview-upload-locations">
                {imageLocation && <img className='img-preview-upload-products' src={preview}/>}
            </div>
        </>
    )
}