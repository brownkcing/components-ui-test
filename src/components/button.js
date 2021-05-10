import React from 'react';


function Button() {
    return (
        <div className='container'>
            <div className='container-title'>
                <h1 className='button-test'>Button</h1>
            </div>
            <div className='container-item _button'>
                <div className='button-item'>
                    <p>Default State</p>
                    <button>Sign Up</button>
                </div>
                <div className='button-item'>
                    <p>Hover</p>
                    <button>Sign Up</button>
                </div>
                <div className='button-item'>
                    <p>Active</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    )
}
export default Button;