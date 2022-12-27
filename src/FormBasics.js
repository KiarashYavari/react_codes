import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';


const FormBasics = () => {
  const [FirstName, setFirstName] = useState('');
  const [Email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const submitHandlr = (e) => {
    e.preventDefault();
    if(FirstName && Email){
        const person = {id :uuid() ,FirstName, Email};
        setPeople((people)=> {
            return [...people, person];
        });
    }
    setFirstName('');
    setEmail('');
  }

  return (
    <>
        <section className='container'>
            <form className='form'>
                <div className='row mb-1'>
                    <div className='col-2'>
                        <label htmlFor="FirstName">Name : </label>
                        <input type="text" id="FirstName" 
                        name="FirstName" value={FirstName} 
                        onChange={(e)=>setFirstName(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-2'>
                        <label htmlFor="Email">Email : </label>
                        <input type="text" id="Email" name="Email"
                         value={Email} onChange={(e)=>setEmail(e.target.value)} />
                    </div>
                </div>
                <div className='row'>
                    <button className='btn btn-secondary col-2 m-4'
                     type="button" onClick={submitHandlr}> Add Person 
                    </button>
                </div>
            </form>
            <section className='row mt-1'>
                <div className='col-3'>
                    {people.map((person)=>{
                        const {id, FirstName, Email} = person;
                        return (
                            <div key={id}>
                                <h4>{FirstName}</h4>
                                <p>{Email}</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </section>
    </>
  )
}

export default FormBasics