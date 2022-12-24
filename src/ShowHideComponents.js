import React, { useEffect, useState } from 'react'

const ShowHideComponents = () => {
  const [show, setShow] = useState(false);
  return (
    <>
    <div className='container'>
        <button className="row btn btn-secondary" onClick={()=>setShow(!show)}>
            show/hide
        </button>
        {show && <Item/>}
    </div>
        
    </>
  )
}


export const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }
  useEffect(()=>{
    window.addEventListener('resize', checkSize);
    return () => {
        window.removeEventListener('resize', checkSize);
        
    }
  }, []);
  return (
    <>
    <div className='row'>

    </div>
        <h1>window size is {size}</h1>
    </>
  )
}


export default ShowHideComponents