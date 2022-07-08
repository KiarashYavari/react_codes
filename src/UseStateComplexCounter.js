import React, {useState} from 'react'

const UseStateComplexCounter = () => {
    const[number, setNumber] = useState(0);
    const counterbtn_hndl = () => {
        setTimeout(()=>{
            setNumber((prevNumber)=>{
                return prevNumber + 1;
            });
        }, 2000);
    };
    return (
        <>
            <section className='container'>
                <h2 className='row' id="counter-title">complex counter</h2>
                <h2 className='row' id="counter-number">{number}</h2>
                <button className="row btn btn-secondary" id="counter-btn" onClick={counterbtn_hndl}>2-sec-timer-increase</button>
            </section>  
        </>
    )
}

export default UseStateComplexCounter