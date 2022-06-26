import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const data = [
    {id:1, name: 'Ali'},
    {id:2, name: 'Javad'},
    {id:3, name: 'Hamed'},
    {id:4, name: 'Farshad'}
  ];

const UseStateWithArray = () => {
    const [people, setPeople] = useState(data);
    const person_remove_hndl = (id) => {
        let new_people = people.filter((person)=>person.id != id);
        setPeople(new_people);
    }
    return (
        <div className='container'>
            {people.map((person)=>{
                    const {id, name} = person;
                    return(
                        <div key={id} className="names-list">
                            <h4>{name}</h4>
                            <button  className="badge bg-secondary" id="list-remove-btn" onClick={()=>person_remove_hndl(id)}>remove</button>
                        </div> 
                    );
                })}
            <button onClick={()=>{setPeople([])}} className="btn btn-secondary" id="claer-data-btn">clear data</button>
        </div>
    );
};

export default UseStateWithArray