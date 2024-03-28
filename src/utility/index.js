import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";

export const getReadBooks = ()=>{
    let readBooks = [];
    const storedReadBooks = localStorage.getItem('readBooks');
    if(storedReadBooks){
        readBooks = JSON.parse(storedReadBooks);
    }
    return readBooks;
}
//save
export const setReadBooks = (readBook) =>{
    let readBooks = getReadBooks()
    const isExist = readBooks.find(rb => rb.id === readBook.id)
    if(isExist){
        return toast.error('Already Reads');
    }
    readBooks.push(readBook)
    localStorage.setItem('readBooks', JSON.stringify(readBooks))
    toast.success('Book added to read list')
}
//dlt
export const removeReadBooks = (id) =>{
    let readBooks = getReadBooks()
    const remaining = readBooks.filter(rrb => rrb.id !== id)
    localStorage.setItem('readBooks', JSON.stringify(remaining))
    toast.success('removed');
}