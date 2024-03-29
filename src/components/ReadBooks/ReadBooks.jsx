import { useEffect, useState } from "react";
import { getReadBooks } from "../../utility";
import ReadBook from "../ReadBook/ReadBook";


const ReadBooks = () => {


    const [books,setBooks] = useState([]);

    useEffect( ()=>{
        const storedReadBookData = getReadBooks();
        setBooks(storedReadBookData);
    }, [])
    
    console.log(books);
    return (
        <div className="">
            {/* <h1>this is read books section</h1> */}
            {
                books.map((book, idx)=> <ReadBook key={idx} book={book}></ReadBook>)
            }
        </div>
    );
};

export default ReadBooks;