import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {


    const [books, setBooks] = useState([]);


    useEffect( ()=>{
        fetch('books.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    }, [])
    return (
        <div className="w-[1170px] mx-auto ">
            this is Books: {books.length}
            {
                books.map((book)=> <Book key={book.bookId} book={book}></Book>)
            }
        </div>
    );
};

export default Books;