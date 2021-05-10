import React from 'react';

function Box1() {
    return (
        <div className='container'>
            <div className='container-title'>
                <h1>Box #1</h1>
            </div>       
            <div className='container-item box1'>
                <div className='box1-item'>
                    <button>Button 1</button>
                </div>
                <div className='box1-item'>
                    <button>Button 2</button>
                </div>
                <div className='box1-item'>
                      <button>Button 3</button>
                </div>
                <div className='box1-item'>
                    <button>Button 4</button>
                </div>
            </div>
        </div>
    )
}
export default Box1;