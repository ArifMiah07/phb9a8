import { useEffect, useState } from 'react';
import { getReadBooks } from '../../utility';
import Chart from '../Chart/Chart';

const PagesToRead = () => {
    const [readBooksData, setReadBookData] = useState([]);

    useEffect( ()=>{
        const storedReadBookData = getReadBooks();
        setReadBookData(storedReadBookData);
    }, [])
    // console.log(readBooksData);

    

    return (
        <div>
            <div className='flex items-center justify-center mx-auto'> 
            <Chart readBooksData={readBooksData}></Chart>
            </div>
        </div>
    );
};

export default PagesToRead;
