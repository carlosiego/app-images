import './index.css'


export default function Content(props) {
    
    return(

        <div className="container-content">
            {props.children}
        </div>
    )
}