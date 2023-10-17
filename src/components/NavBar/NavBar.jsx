import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <nav style={{ backgroundImage: 'url("https://i.ibb.co/v3MpJw2/15.jpg"' }} className="py-6 bg-cover fixed top-0 left-0 right-0 z-50">
                <Link to='/' className="flex gap-4 justify-center items-center w-fit mx-auto" title="Espresso Emporium">
                    <img src="https://i.ibb.co/jV0kLgs/logo1.png" alt="Logo" className="h-16" />
                    <h1 className="text-5xl font-rancho text-white">Espresso Emporium</h1>
                </Link>
            </nav>
        </>
    );
};

export default NavBar;