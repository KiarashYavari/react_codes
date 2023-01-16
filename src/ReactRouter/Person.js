import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {data} from './data';

const Person = () => {
  const [name, setName] = useState('default name');
  const {id} = useParams();
  useEffect(()=>{
    const newPerson = data.find((person) => person.id === id);
    setName(newPerson.name);
  }, [])
  return (
    <>
    <main className='container'>
      <h1 className='row'>{name}</h1>
      <Link to="/people" className='row btn btn-secondary'>people page</Link>
    </main>
      
    </>
  )
}

export default Person