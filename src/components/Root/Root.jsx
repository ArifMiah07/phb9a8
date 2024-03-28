import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Loader from "../Loader/Loader";


const Root = () => {


    const navigation = useNavigation();
    if(navigation.state === 'loading') return <Loader></Loader>
    return (
        <div>
            <div>
            <Header></Header>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;