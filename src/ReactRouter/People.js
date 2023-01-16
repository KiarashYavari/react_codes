import React from 'react';
import { Link } from 'react-router-dom';
import {data} from './data';

const People = () => {
  return (
    <>
      <ul className="container">
          {data.map((person)=>{
            const{id, name, lastname} = person;
            return(
              <li key={id}>
                <h4>{name} {lastname}</h4>
                <Link to={`/person/${id}/`} className="btn btn-secondary">read more</Link>
              </li>
            );
          })}
      </ul>
    </>
  )
}

export default People