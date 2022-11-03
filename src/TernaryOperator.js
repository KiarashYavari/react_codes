import React, { useState } from 'react'

const TernaryOperator = () => {
    const [text, setText] = useState('hello world!');
    const [isError, setIsError] = useState(false);
    const second_value = isError && 'Error happend!';
    return (
      <div className='container'>
        <h1 className='m-4'>{text || ''}</h1>
        <button className='m-4 btn btn-secondary' onClick={()=> setIsError(!isError)}>
            toggle error
        </button>
        <h1 className='m-4'>{second_value}</h1>
        {isError ? <p className='m-4'>there is an Error</p> : <p className='m-4'>there is no Error</p>}
      </div>
    )
}

export default TernaryOperator