import React, { useState } from 'react';
import Book from './Book';

const BookList = () => {
  
  const [books, setBooks] = useState([
    {
      title: 'Interesting facts for curious minds',
      author: 'Joordan Moore',
      imgSrc: '/img/book1.jpg',
    },
    {
      title: 'Atomic Habites',
      author: 'James Clear',
      imgSrc: '/img/book2.jpg',
    },
    {
      title: 'Fairy Tale',
      author: 'Stephan King',
      imgSrc: '/img/book3.jpg',
    },
  ]);

  return (
    <div className="booklist">
      {books.map((book, index) => (
        <Book 
          key={index}
          title={book.title} 
          author={book.author} 
          imgSrc={book.imgSrc}
        />
      ))}
    </div>
  );
};

export default BookList;