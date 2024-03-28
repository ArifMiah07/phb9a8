// import { useLoaderData, useParams } from "react-router-dom";
// import BooksDetails from "../BooksDetails/BooksDetails";
import PropTypes from "prop-types";


const BookDetails = ({books}) => {
    console.log(books);
    const { id, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing  } = books;
    
    return (
        <div className="flex flex-col lg:flex lg:flex-row gap-12">
            {/* img */}
            <div className="lg:w-[571px] ab p-[70px] ">
                <img className="lg:w-[425px] " src={image} alt="" />
            </div>
            {/* text */}
            <div>
                <h1>{bookName}</h1>
                <div>
                    <p>By : {author}</p>
                </div>
                <div>
                    <p>{category}</p>
                </div>
                <p><span>Review: </span>{review}</p>
                <div className="flex">
                    <span>Tag: </span>
                    <div className="flex justify-between">
                        {
                            tags.map((tag, idx)=> <p className="" key={idx}>{tag}</p>)
                        }
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>Number Of Pages</td>
                            <td>{totalPages}</td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <td>Publisher</td>
                            <td>{publisher}</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <td>Year of Publishing</td>
                            <td>{yearOfPublishing}</td>
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <td>Rating</td>
                            <td>{rating}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* btn */}
                <div>
                    <button className="btn ">Read</button>
                    <button className="btn bg-[#50B1C9] ">Wishlist</button>
                </div>
            </div>
        </div>
    );
};


BookDetails.propTypes = {
    books: PropTypes.object
}

export default BookDetails;