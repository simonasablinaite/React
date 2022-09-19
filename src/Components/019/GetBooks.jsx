import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function GetBooks() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    axios.get("https://in3.dev/knygos/").then((res) => setBooks(res.data));
  }, []);

  return (
    <ul>
      {books?.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
export default GetBooks;
