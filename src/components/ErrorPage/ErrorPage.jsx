import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>Oops! </h2>
            <p>pages not found </p>
            <Link to="/"><button className="btn btn-info">back</button></Link>
        </div>
    );
};

export default ErrorPage;