import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


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


const Books=[
  {
    'id':1,
    'src':'https://m.media-amazon.com/images/I/51g0LdfhtvL.jpg', 
    'title':'Goblet of fire',
    'author':'J.K rowling'
  },
  {
    'id':2,
    'src':'https://m.media-amazon.com/images/I/51SSiT9SH7L.jpg',
     'title': 'Secret wife',
     'author': 'Gill Paul'
  },

]


function BookList(){
  return (
    <section className="book-list">
      {Books.map((book, id)=>{
        return <Book key={book.id} {...book} />
      })}
    </section>
  );
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
