import React, {useState, useEffect} from 'react'

const UseEffectDependencyList = () => {
  const [number, setNumber] = useState(0);

  const number_update_hndlr = ()=>{
    setNumber((number)=>{
        return number+1;
    });
  };
  
  useEffect(()=>{
    if(number > 0){
        document.title = `new message ${number}`;
    }
  }, [number]);

  useEffect(()=>{
    console.log('I only render at the begining! for once :))');
  }, []);

  return (
    <>
        <section className='container'>
                <h2 className='row' id="counter-title">complex counter</h2>
                <h2 className='row' id="counter-number">{number}</h2>
                <button className="row btn btn-secondary" id="counter-btn" onClick={number_update_hndlr}>add one more</button>
        </section>  
    </>
  )
}

export default UseEffectDependencyList