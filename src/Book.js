import React from 'react'
// import PropTypes from 'prop-types'

function Book(props){
    const {src, title, author} = props;
    return (
        <section className="book">
             <img src={src} alt={title} className='book-img' />
             <h3>{title}</h3>
             <h4>{author}</h4>
        </section>
    );
  }

// Book.propTypes = {}

export default Book

