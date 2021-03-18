import React, { useEffect } from 'react'


const ModalPage = ({ img, close }) => {

    useEffect(() => {
        img && (document.body.style.overflow = "hidden")
        return () => (document.body.style.overflow = "scroll")
    }, [img])


    return (
        <div className='custom-overlay'>
            <div className='custom-modal'>
                <div className='custom-modal__container'>
                    <button
                        onClick={() => close(null)}
                        type="button"
                        className="close custom-modal__btn">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div>
                        <img
                            className='custom-modal__img'
                            src={img.src}
                            alt={`img ${img.id}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalPage