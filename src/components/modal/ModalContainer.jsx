import './modalContainer.css'

const ModalContainer = ({ show, setShowModal }) => {

    const close = () =>{
        setShowModal(false)
    }

    console.log(`show`, show)
    if(show){

    return (
        <div>
            
        <div className='mc-container'>
        <div className="mc-close" onClick={close}>X</div>
            Modal
        </div>
        </div>
    )
    }else{
        return(
            <div></div>
        )
    }
}

export default ModalContainer
