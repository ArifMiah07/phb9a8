import PropTypes from 'prop-types'; // ES6
import '../../Styles/font-style.css'
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Book = ({book}) => {

    const {tags, category, rating, author, bookName, image, id } = book;
    return (
        <Link to={`/book-details/${id}`}>
            <div className='flex flex-col gap-6 p-6 books-con mx-3'>
                <div className='flex flex-col bg-[#F3F3F3] rounded-2xl items-center justify-center py-12 px-20'>
                    <img className='w-[134px] h-[166px] ' src={image} alt="" />
                </div>
                <div>
                    <div className='flex items-center justify-between'>
                        {
                            tags.map((tag, idx)=> <p className='flex items-center justify-between book-bgr font-medium work-sans text-[#23BE0A] px-5 py-2' key={idx}>{tag}</p>)
                        }
                    </div>
                    <h1 className='text-[24px] text-[#131313] my-3 font-bold playfair-display '>{bookName}</h1>
                    <div className=''>
                        <p className='border-b-[1.4px] border-dashed border-[#13131326] pb-5 text-[#131313cc] font-medium work-sans '>By : {author}</p>
                    </div>
                    <div className='flex justify-between text-[#131313cc] font-medium work-sans mt-5'>
                        <h1>{category}</h1>
                        <p className='flex gap-3 items-center'>{rating} <FaRegStar /></p>
                    </div>
                </div>
            </div>
        </Link>
    );
};


Book.propTypes = {
    book: PropTypes.object
}

export default Book;