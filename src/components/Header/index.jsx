import './index.css'

export default function Header(props) {

    return (
        <div className='container-header'>
            {props.children}
        </div>
    )
}