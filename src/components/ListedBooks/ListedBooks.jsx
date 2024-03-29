// import Read from "../Read/Read";
import ReadBooks from "../ReadBooks/ReadBooks";
import WishlistBooks from "../WishlistBooks/WishlistBooks";
import '../../Styles/font-style.css'


const ListedBooks = () => {
    return (
        <div>
            <h1 className="work-sans text-[28px] text-[#131313] font-bold ab text-center py-5 ">Books</h1>
            <select className="select select-bordered w-fit bg-[#23BE0A] outline-none hover:outline-none border-none ">
                <option disabled selected>Sort By</option>
                <option className="bg-white">Rating</option>
                <option>Number of Pages</option>
                <option>Published Year</option>
            </select>
            <div>
                <div role="tablist" className="tabs tabs-lifted">
                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <ReadBooks></ReadBooks>
                    </div>

                    <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                        <WishlistBooks></WishlistBooks>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListedBooks;