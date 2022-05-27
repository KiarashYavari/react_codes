import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Book(props){
  return (
      <section className="book">
           <img src={props.src} alt={props.title} className='book-img' />
           <h3>{props.title}</h3>
           <h4>{props.author}</h4>
      </section>
  );
}
const first_book = {
  'src':'https://m.media-amazon.com/images/I/51g0LdfhtvL.jpg', 
  'title':'Goblet of fire',
  'author':'J.K rowling'
};

const second_book = {
    'src':'https://m.media-amazon.com/images/I/51SSiT9SH7L.jpg',
     'title': 'Secret wife',
     'author': 'Gill Paul'
}

function BookList(){
  return <Book src={first_book.src}
  title={first_book.title} 
  author={first_book.author} />;
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       <BookList />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
