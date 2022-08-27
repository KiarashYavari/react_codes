import React, {useEffect, useState} from 'react'

const UseEffectCondition = () => {
  const [number, setNumber] = useState(0);
  const number_update_hndlr = ()=>{
    setNumber((number)=>{
        return number+1;
    });
  };

  useEffect(()=>{
    if(number > 0){
       document.title = `New Message ${number}`;
    }
  });

  return (
    <>
        <section className='container'>
                <h2 className='row' id="counter-title">complex counter</h2>
                <h2 className='row' id="counter-number">{number}</h2>
                <button className="row btn btn-secondary" id="counter-btn" onClick={number_update_hndlr}>increase number</button>
        </section>  
    </>
  )
}

export default UseEffectCondition