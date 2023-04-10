import './index.css'

export default function Header(props) {

    return (
        <div className='container-head'>
            {props.children}
            
        </div>
    )
}