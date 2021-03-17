import React from 'react'

const ImageItem = ({ img }) => {

    return (
        <div className='img-container' key={img.id}>
            <img className='img' src={img.src} alt={`img ${img.id}`} />
            <button type="button" className="close btn-remove">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default ImageItem