// import { useLoaderData, useParams } from "react-router-dom";
// import BooksDetails from "../BooksDetails/BooksDetails";
import PropTypes from "prop-types";
import { setReadBooks, setWishlistBooks } from "../../utility";
import Toast from "../Toast/Toast";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BookDetails = ({books}) => {
    // console.log(books);
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing  } = books;
    


    const handleReadBooks = (books)=> {
        // console.log(books);
        setReadBooks(books)
    }

    const handleWishlistBooks = (books)=>{
        // console.log(books);
        setWishlistBooks(books);
    }
    return (
        <div className="flex flex-col lg:flex justify-between lg:flex-row gap-12">
            {/* img */}
            <div className="lg:w-[571px] ab p-[70px] flex items-center justify-center">
                <img className="lg:w-[425px] " src={image} alt="" />
            </div>
            {/* text */}
            <div>
                <h1 className="text-[#131313] text-[40px] font-bold playfair-display ">{bookName}</h1>
                <div className="text-[20px] font-medium text-[#131313cc] work-sans   my-6">
                    <p >By : {author}</p>
                </div>
                <div className=" border-y border-[#13131326]  ">
                    <p className="py-4 text-[20px] text-[#131313cc] work-sans">{category}</p>
                </div>
                <p className="mt-6 font-medium"><span className="work-sans font-bold">Review: </span><span className=" work-sans text-[#131313b3]">{review}</span></p>
                <div className="flex my-6">
                    <span className="font-bold">Tag </span>
                    <div className="flex justify-between gap-6">
                        {
                            tags.map((tag, idx)=> <p className="text-[#23BE0A] font-medium work-sans px-4 bg-[#23be0a0d] rounded-3xl  " key={idx}>#{tag}</p>)
                        }
                    </div>
                </div>
                <div className="overflow-x-auto border-t border-[#13131326] py-6 ">
                    <table className="table">
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Number Of Pages</td>
                            <td className="font-bold">{totalPages}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Publisher</td>
                            <td className="font-bold">{publisher}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Year of Publishing</td>
                            <td className="font-bold">{yearOfPublishing}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>Rating</td>
                            <td className="font-bold">{rating}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* btn */}
                <div className="flex gap-4">
                    <button 
                        onClick={()=>handleReadBooks(books)}
                    className="btn ">Read</button>
                    <button 
                        onClick={()=> handleWishlistBooks(books)}
                    className="btn bg-[#50B1C9] ">Wishlist</button>
                    <Toast></Toast>
                </div>
            </div>
        </div>
    );
};


BookDetails.propTypes = {
    books: PropTypes.object
}

export default BookDetails;