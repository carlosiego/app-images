import './index.css'

export default function Header(props) {

    return (
        <div className='container-header'>
            <div class="radio-inputs">
                <label class="radio">
                <input type="radio" name="radio"  checked={props.optionProducts}/>
                <span class="name">Produtos</span>
                </label>
                    
                <label class="radio">
                <input type="radio" name="radio"/>
                <span class="name">Localizações</span>
                </label>
            </div>  
        </div>
    )
}