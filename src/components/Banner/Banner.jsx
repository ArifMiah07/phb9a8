import { NavLink } from 'react-router-dom';
import '../../Styles/font-style.css'

const Banner = () => {
    return (
        <div className='lg:w-[1170px] mx-auto mt-8 banner flex flex-col lg:flex lg:flex-row items-center gap-4 justify-between py-16 px-20'>
            {/* <h1>This is banner</h1> */}
            <div>
                <h1 className='text-[56px] text-[#131313] font-bold playfair-display'>
                    Books to freshen up <br /> your bookshelf
                </h1>
                <NavLink to="/listed-books"><button className='btn bg-[#23BE0A] text-white work-sans text-[20px] font-bold mt-12'>View The List</button></NavLink>
            </div>
            <div>
                <img src="https://m.media-amazon.com/images/I/917Bc9C1MlL._SL1500_.jpg" className='w-[200px] ' alt="" />
            </div>
        </div>
    );
};

export default Banner;