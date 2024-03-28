import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Books from "../Books/Books";


const Home = () => {


    const books = useLoaderData();
    console.log(books);
    return (
        <div>
            <Banner></Banner>

            <Books></Books>
            <div>

            </div>
        </div>
    );
};

export default Home;