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


//wishlist


export const getWishlistBooks = ()=>{
    let wishlistBooks = [];
    const storedWishlistBooks = localStorage.getItem('wishlistBooks');
    if(storedWishlistBooks){
        wishlistBooks = JSON.parse(storedWishlistBooks);
    }
    return wishlistBooks;
}
//save
export const setWishlistBooks = (wishlistBook) =>{
    let wishlistBooks = getWishlistBooks()
    const isExist = wishlistBooks.find(wlb => wlb.id === wishlistBook.id)
    if(isExist){
        return toast.error('Already Added to Wishlist');
    }
    wishlistBooks.push(wishlistBook)
    localStorage.setItem('wishlistBooks', JSON.stringify(wishlistBooks))
    toast.success('Book added to read list')
}
//dlt
export const removeWishlistBooks = (id) =>{
    let wishlistBooks = getWishlistBooks()
    const remaining = wishlistBooks.filter(rwlb => rwlb.id !== id)
    localStorage.setItem('wishlistBooks', JSON.stringify(remaining))
    toast.success('removed');
}