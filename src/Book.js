import React from "react";

const Book = (props) => {
  //attributes, eventHandler
  //onMouseOver, onClick
  const clickHandler = () => {
    alert("Hello World");
  };
  const complexExample = (author) => {
    alert(author);
  };

  const { img, title, author } = props.book;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} />
      <h1>{title}</h1>
      <h3>{author}</h3>
      <button type="button" onClick={clickHandler}>
        {" "}
        Reference Example
      </button>
      <button type="Button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default Book;
