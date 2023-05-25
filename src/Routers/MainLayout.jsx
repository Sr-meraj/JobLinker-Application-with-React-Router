import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from "../spinner/Spinner";

const Root = () => {
    const navigation = useNavigation()
    return (
        <div>
            <Header />
           { navigation.state === 'loading' && <Spinner/>}
            <Outlet />
            <ToastContainer />
            <Footer />
        </div>
    );
};

export default Root;