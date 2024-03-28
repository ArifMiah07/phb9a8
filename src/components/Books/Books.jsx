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
        <div className=" lg:w-[1170px] mx-auto mt-20 mb-6 ">
            <div>
                <h1 className="text-center text-[#131313] font-bold mb-8 playfair-display text-[40px] ">Books</h1>
            </div>
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-3 gap-6">
                {
                    books.map((book)=> <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;