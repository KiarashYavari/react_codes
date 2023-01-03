import React, {useEffect, useRef} from 'react'

const UseRef = () => {
  const refContainer = useRef(null);
  const SubmitHndlr = (e) =>{
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(()=>{
    refContainer.current.focus();
  });

  return (
    <>
    <section className="container">
        <form onSubmit={SubmitHndlr}>
            <input type="text" className='row' ref={refContainer} />
            <button type="submit" className="row btn btn-secondary mt-2">submit</button>
        </form>

    </section>
    </>
  )
}

export default UseRef