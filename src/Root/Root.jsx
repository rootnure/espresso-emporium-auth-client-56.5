import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';


const Root = () => {
    return (
        <div className='font-raleway'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;