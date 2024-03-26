import PropTypes from 'prop-types'; // ES6
import '../../Styles/font-style.css'

const Book = ({book}) => {

    const {tags, category, rating, author, bookName, image } = book;
    return (
        <div>
            <h1>this is book!{book.bookId}</h1>
            <div>
                <img className='w-[134px] h-[166px] book-bgr' src={image} alt="" />
            </div>
            <div>
                <h1>{bookName}</h1>
            </div>
        </div>
    );
};


Book.propTypes = {
    book: PropTypes.object
}

export default Book;