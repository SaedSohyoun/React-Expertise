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
      title: 'Atomic Habits',
      author: 'James Clear',
      imgSrc: '/img/book2.jpg',
    },
    {
      title: 'Fairy Tale',
      author: 'Stephen King',
      imgSrc: '/img/book3.jpg',
    },
  ]);

  // Zoekterm bijhouden in state
  const [searchTerm, setSearchTerm] = useState('');

  // Filter boeken op basis van de zoekterm
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      {/* Zoekbalk */}
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Zoekterm updaten bij verandering
        style={{ padding: '10px', margin: '20px 0', width: '100%' }}
      />

      {/* Gefilterde lijst met boeken */}
      <div className="booklist">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <Book 
              key={index}
              title={book.title} 
              author={book.author} 
              imgSrc={book.imgSrc}
            />
          ))
        ) : (
          <p>No books found</p> // Weergeven als er geen boeken overeenkomen met de zoekterm
        )}
      </div>
    </div>
  );
};

export default BookList;
