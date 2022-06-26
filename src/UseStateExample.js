import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';




const UseStateExample = () => {
    const[title, setTitle] = useState('hello world <3');
    const title_handler = () => {
        
        if(title === 'hello world <3'){
            setTitle('hello from react use state hook');
        }
        else{
            setTitle('hello world <3');
        }
    };
  return (
    <div className="container">
        <h1 className='row use-state-title'>
            {title}
        </h1>
        <button className='row btn-primary change-btn-title' onClick={title_handler}>
            change title
        </button>
    </div>
  )
}

export default UseStateExample