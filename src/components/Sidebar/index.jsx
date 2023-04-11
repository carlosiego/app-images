import './index.css'

export default function Sidebar() {
    return(
        <div className='container-sidebar'>
            <div class="radio-inputs-action">
                <label class="radio-action">
                <input type="radio" name="radio-action" checked={true}/>
                <span class="name">Salvar</span>
                </label>
                    
                <label class="radio-action">
                <input type="radio" name="radio-action"/>
                <span class="name">Visualizar</span>
                </label>

                <label class="radio-action">
                <input type="radio" name="radio-action"/>
                <span class="name">Modificar</span>
                </label>

                <label class="radio-action">
                <input type="radio" name="radio-action"/>
                <span class="name">Deletar</span>
                </label>
            </div>
        </div>
    )
}