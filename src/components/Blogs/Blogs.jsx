import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";


const Blogs = () => {


    const loader = useLoaderData();
    // console.log(loader);
    return (
        <div>
            {
                loader.map((blogs, idx)=> <Blog key={idx} blogs={blogs}></Blog>)
            }
        </div>
    );
};

export default Blogs;