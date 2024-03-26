// import { NavLink } from "react-router-dom";
import '../../Styles/font-style.css'

import { NavLink } from "react-router-dom";


const Header = () => {
    
    return (
        <div className="navbar bg-base-100 border border-b border-blue-200">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <NavLink to="/" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] btn work-sans font-semibold text-[18px] px-4 py-3' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to="/listed-books" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Listed Books</NavLink>
                    <NavLink to="" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Pages to Read</NavLink>
                </ul>
                </div>
                <a className="btn btn-ghost text-[#131313] text-[28px] font-bold work-sans flex gap-0"><span className='book-gdnt'>Book</span><span className='s-gdnt '>S</span><span className='tore-gdnt'>tore</span></a>
            </div>
            <div className="navbar-center hidden lg:flex gap-12">
                {/* <ul className="menu menu-horizontal px-3"> */}
                    <NavLink to="/" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Home</NavLink>
                    <NavLink to="/listed-books" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Listed Books</NavLink>
                    <NavLink to="/pages-to-read" className={({isActive})=> isActive ? 'text-[#23BE0A] border border-[#23BE0A] rounded-xl work-sans font-semibold text-[18px] px-3 py-2' : ' text-[18px]'}>Pages to Read</NavLink>
                {/* </ul> */}
            </div>
            <div className="navbar-end text-[18px] gap-4">
                <button className='btn bg-[#23BE0A] text-white'>Sign In</button>
                <button className='btn bg-[#59C6D2] text-white'>Sign Up</button>
            </div>
        </div>
    );
};

export default Header;