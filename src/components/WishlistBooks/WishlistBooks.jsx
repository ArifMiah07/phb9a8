import { useEffect, useState } from "react";
import { getWishlistBooks } from "../../utility";
import WishlistBook from "../WishlistBook/WishlistBook";
// import ReadBook from "../ReadBook/ReadBook";



const WishlistBooks = () => {
    
    const [books, setBooks] = useState([]);

    useEffect( ()=>{
        const storedReadBookData = getWishlistBooks();
        setBooks(storedReadBookData);
    }, [])
    
    console.log(books);
    
    return (
        <div>
            <h1>this is wishlist books section </h1>
            <div>
                {
                    books.map((book, idx)=> <WishlistBook key={idx} book={book}></WishlistBook>)
                }
            </div>
        </div>
    );
};

export default WishlistBooks;