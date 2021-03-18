import React from 'react'

const ImageItem = ({ img, setModalImage, delImg }) => {

    return (
        <div className='img-container' key={img.id}>
            <img
                onClick={() => setModalImage(img)}
                className='img'
                src={img.src}
                alt={`img ${img.id}`} />
            <button
                onClick={() => delImg(img.id)}
                type="button"
                className="close btn-remove">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}

export default ImageItem