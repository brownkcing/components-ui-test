import React,{ useState, useEffect } from 'react';

function Table() {
    const [state, setState] = useState([]);
    
    useEffect(()=>{
        const apiUrl ='https://jsonplaceholder.typicode.com/users';
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setState(data)
            })
    }, [setState]);

    const DataItem = ({name, address, phone}) => (
        <div className="dataRow">
          <div>{name}</div>
          <div>{address.city}</div>    
          <div>{phone}</div>    
        </div>
      );

    const dataRow = state.map((item) => <DataItem {...item}/>)

    
    return (
        <div className='container'>
            <div className='container-title table'>
                <h1>JS Test</h1>
                <p>Create a table with sticky headers</p>
            </div>
        <div className='table'>
            <div className='table-head sticky'>
                <div style={{borderRight:'solid 1px white'}}>Name</div>
                <div style={{borderRight:'solid 1px white'}}>City</div>
                <div>Phone Number</div>
            </div>
            <div className='table-body'>
                {dataRow}
            </div>
      </div>
        </div>
    )
}
export default Table;