import React from 'react'
import Clock from './Clock'


const Header = ({ count }) => {

    return (
        <header className='header'>
            <div className='header-container'>
                <div className='header__counter'>
                    На данный момент на странице {count} картинок
                </div>
                <div className='header__date'>
                    <Clock />
                </div>
            </div>
        </header>
    )
}

export default Header