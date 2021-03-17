import React from 'react'


const ModalPage = (props) => {

    return <div className='overlay'>
        <div className='custom-modal'>
            <div className='modal-container'>
                <img className='custom-modal__img' src={props.img.src} alt={`img ${props.img.id}`} />
                <button type="button" className="close btn-close-modal">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
}

export default ModalPage