import React, { useState } from 'react'

const ShortCircuiting = () => {
  const [text, setText] = useState('');
  const first_value = text || '';
  const second_value = !text && 'hello world!';
  return (
    <>
        <h1>{first_value}</h1>
        <h1>{second_value}</h1>
    </>
  )
}

export default ShortCircuiting