import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import { books } from "./books";
import Book from "./Book";
// const title = "The Invisble Man";
// const author = "H.G. Wells";

function BookList() {
  //component needs to be set up with capitalization
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} book={book} />;
      })}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
