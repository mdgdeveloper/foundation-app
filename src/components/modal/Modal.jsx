import './modal.css';
import { useState } from 'react';
import ModalContainer from './ModalContainer';

// Modal version 0.1 
// Only the behavior created in case we need a modal.
// 
// Pending tasks
// -----------------
// [ ] Be able to pass parameters ( Value of the button, content of the Container)
// [ ] Be able to renderize in different manners: styling. Also provided with a parameter. 
// [ ] Integrate properly with the environment.  

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const changeShowModal = () =>{
        setShowModal( prev => !prev);
    }



    return (
        <div>
                 <div className="modal-button">
            <button onClick={changeShowModal}>Show Modal</button>
        </div>
            <div className={showModal ? "modal-grayed" : ""}></div>
   
        <div className="modal-container">
            <ModalContainer show={showModal} setShowModal={setShowModal} />
        </div>
        </div>

    )
}

export default Modal;
