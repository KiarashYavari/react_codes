import React, {useState} from 'react'

const UseStateCounter = () => {
  const[number, setNumber] = useState(0);
  const resetHandler = ()=>{
    setNumber(0);
  };
  return (
    <>
        <section className='container'>
            <h2 className='row' id="counter-title">simple counter</h2>
            <h2 className='row' id="counter-number">{number}</h2>
            <section id='counter-btn'>
              <button className='btn btn-secondary m-1' onClick={()=>setNumber(number+1)}>increase</button>
              <button className='btn btn-secondary m-1' onClick={resetHandler}>reset</button>
              <button className='btn btn-secondary m-1' onClick={()=>setNumber(number-1)}>decrease</button>
            </section>
        </section>
    </>
  );
};

export default UseStateCounter