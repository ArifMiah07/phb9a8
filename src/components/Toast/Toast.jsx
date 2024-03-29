// import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Toast = () => {
    const notify = () => toast("Welcome To our Bookstore!");
    return (
        <div>
            <button className='btn bg-[#23BE0A] border border-[#23BE0A] px-3 ' onClick={notify}>Click!</button>
            <ToastContainer />
        </div>
    );
};

export default Toast;