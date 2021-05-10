import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div className='container'>
            <div className='container-title counter'>
                <h1>JS Test</h1>
                <p>Create a Simple click counter based of the component you've buillt</p>
            </div>       
            <div className='container-item counter'>
                <div className='counter-item'>
                    <div className='counter-display'>{count}</div>
                    <button onClick={handleClick}>Tap Me!</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;