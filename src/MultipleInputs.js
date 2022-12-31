import React, { useState } from 'react'
import { v4 as uuid } from 'uuid';


const MultipleInputs = () => {
    const [people, setPeople] = useState([]);
    const [person, setPerson] = useState({FirstName: '', Email: '',
                                Age: '',})

    const hndlChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson({...person, [name]:value});
    };

    const hndlSubmit = (e)=>{
        e.preventDefault();
        if(person.FirstName && person.Email && person.Age){
            const newPerson = {...person, id: uuid()};
            setPeople([...people, newPerson]);
            setPerson({ FirstName:'', Email:'', Age:''});

        }
    };
  
    
  
    return (
      <>
          <section className='container'>
              <form className='form' onSubmit={hndlSubmit}>
                  <div className='row mb-1'>
                      <div className='col-2'>
                          <label htmlFor="FirstName">Name : </label>
                          <input type="text" id="FirstName" 
                          name="FirstName" value={person.FirstName} 
                          onChange={hndlChange} />
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-2'>
                          <label htmlFor="Email">Email : </label>
                          <input type="text" id="Email" name="Email"
                           value={person.Email} onChange={hndlChange} />
                      </div>
                  </div>
                  <div className='row'>
                      <div className='col-2'>
                          <label htmlFor="Age">Age : </label>
                          <input type="text" id="Age" name="Age"
                           value={person.Age} onChange={hndlChange} />
                      </div>
                  </div>
                  <div className='row'>
                      <button className='btn btn-secondary col-2 m-4'
                       type="submit"> Add Person 
                      </button>
                  </div>
              </form>
              <section className='row mt-1'>
                  <div className='col-3'>
                      {people.map((person)=>{
                          const {id, FirstName, Email, Age} = person;
                          return (
                              <div key={id}>
                                  <h4>{FirstName}</h4>
                                  <p>Age : {Age}</p>
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

export default MultipleInputs