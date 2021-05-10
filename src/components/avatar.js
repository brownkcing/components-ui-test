import React from 'react';

function Avatar() {
    return (
        <div className='container'>
            <div className='container-title'>
                <h1 className='button-test'>Avatar</h1>
            </div>
            <div className='container-item avatar'>
                <img className='image-avatar' src='/img/17.jpg' alt='avatar1' />
                <img className='image-avatar' src='/img/17.jpg' alt='avatar2' />
                <div className='image-avatar'/>   
            </div>
        </div>
    )
}
export default Avatar;