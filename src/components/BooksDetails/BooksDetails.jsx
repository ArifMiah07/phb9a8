import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import BookDetails from '../BookDetails/BookDetails';

const BooksDetails = () => {

    const { id } = useParams(); 
    const bookDetails = useLoaderData();
    const intId = parseInt(id);
    const books = bookDetails.find(book => book.id === intId);

    console.log(bookDetails);
    console.log(books);

    
    
    return (
        <div className="lg:w-[1170px] mx-auto my-12 h-screen">
            {/* <h1>this book details:</h1>
            <h2>{id}</h2>
            <h2>{bookDetails.length}</h2> */}
            <BookDetails key={books.id} books={books}></BookDetails>
        </div>
    );
};

export default BooksDetails;