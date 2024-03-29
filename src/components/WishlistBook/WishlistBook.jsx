import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { TbBrandPagekit } from "react-icons/tb";
import { NavLink } from 'react-router-dom';



const WishlistBook = ({book}) => {
    console.log(book);
    const {tags, category, rating, author, bookName, image, yearOfPublishing, publisher, id, totalPages } = book;
    return (
        <div className='flex flex-col lg:flex lg:flex-row gap-6 p-6 books-con mx-3'>
            <div className='lg:flex lg:flex-col bg-[#F3F3F3] rounded-2xl lg:items-center lg:justify-center lg:py-12 lg:px-20'>
                <img className='lg:w-[134px] lg:h-[166px] ' src={image} alt="" />
            </div>
            <div className='lg:w-full'>
                <h1 className='text-[24px] text-[#131313] my-3 font-bold playfair-display '>{bookName}</h1>
                <div className=''>
                    <p className=' pb-5 text-[#131313cc] font-medium work-sans '>By : {author}</p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-3 items-center'>
                        <span className='font-bold'>Tag</span>
                        <span className='flex items-center gap-6'>
                            {
                                tags.map((tag, idx)=> <p className='flex items-center justify-between book-bgr font-medium work-sans text-[#23BE0A] px-5 py-2' key={idx}>#{tag}</p>)
                            }
                        </span>
                        <span className='flex items-center gap-3'><p><CiLocationOn /></p> Year of Publishing: {yearOfPublishing}</span>
                    </div>
                </div>
                <div className='flex items-center gap-3 my-6'>
                    <p className='flex items-center gap-2 '><span><FaUserFriends /></span> Publisher: {publisher}</p>
                    <p className='flex items-center gap-2 '><span><TbBrandPagekit /></span>Page: {totalPages}</p>
                </div>
                <div className='flex gap-4 items-center border-t-[1.4px] border-[#13131326] pt-5'>
                    <p className='px-4 py-2 w-fit bg-[#328eff26] text-[#328EFF] rounded-[30px] '><span>Category: {category}</span></p>
                    <p className='px-4 py-2 w-fit bg-[#FFAC3326] text-[#FFAC33] rounded-[30px] '><span>Rating: {rating}</span></p>
                    <NavLink to={`/book-details/${id}`}><button className='rounded-[30px] bg-[#23BE0A] text-white work-sans font-semibold px-4 py-2'>View Details</button></NavLink>
                </div>
            </div>
        </div>
    );
};



WishlistBook.propTypes ={
    book: PropTypes.object
}
export default WishlistBook;