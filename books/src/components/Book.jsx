import React from 'react';

const Book = ({ title, author, imgSrc }) => {
  return (
    <div className="book">
      <img src={imgSrc} alt={`Cover of ${title}`} />
      <h2>{title}</h2>
      <p>{author}</p>
    </div>
  );
};

export default Book;
