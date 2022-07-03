import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function UseStateObj() {

  const[person, setPerson] = useState({name:'Javad', age:43, job:'baker'});
  const setPersonHandler = ()=>{
    setPerson({...person, job:'chef'});
  };
  return (
    <div className='container'>
        <h4 className='row'>
            {person.name}
        </h4 >
        <h4 className='row'>
            {person.age}
        </h4>
        <h4 className='row'>
            {person.job}
        </h4>
        <button className='btn btn-secondary' onClick={setPersonHandler}>change job</button>
    </div>
  )
}

export default UseStateObj