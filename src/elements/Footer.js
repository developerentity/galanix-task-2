import React from 'react'


const Footer = ({ reset }) => {

    return (
        <footer className='footer'>
            <div className='footer-container'>
                <button onClick={reset} className='footer__btn btn btn-light'>Восстановить</button>
            </div>
        </footer>
    )
}

export default Footer