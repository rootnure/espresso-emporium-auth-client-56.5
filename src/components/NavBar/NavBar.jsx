import { Link, NavLink } from "react-router-dom";
import { IoMdHome, IoIosPeople, IoMdPerson, IoIosLogIn, IoIosLogOut, IoMdAddCircleOutline } from "react-icons/io";
import './NavBar.css';


const NavBar = () => {

    const links = <>
        <NavLink to="/" title="Home" className="ee-nav-btn">
            <IoMdHome></IoMdHome>
        </NavLink>
        {!isNaN(1) ? <>
            <NavLink to="/addNew" title="Add new coffee" className="ee-nav-btn">
                <IoMdAddCircleOutline></IoMdAddCircleOutline>
            </NavLink>
            <NavLink to="/users" title="All Users" className="ee-nav-btn">
                <IoIosPeople></IoIosPeople>
            </NavLink>
            <NavLink to="/profile" title="My Profile" className="ee-nav-btn">
                <IoMdPerson></IoMdPerson>
            </NavLink>
        </> : ''}
        <NavLink to="/login" title="Login" className="ee-nav-btn">
            <IoIosLogIn></IoIosLogIn>
        </NavLink>
        {!isNaN(1) ? <>
            <button title="logout" className="ee-nav-btn">
                <IoIosLogOut></IoIosLogOut>
            </button>
        </> : ''}
    </>

    return (
        <>
            <nav style={{ backgroundImage: 'url("https://i.ibb.co/v3MpJw2/15.jpg"' }} className="bg-cover fixed top-0 left-0 right-0 z-50 flex justify-between px-6">
                <section className="py-4">
                    <div className="w-fit">
                        <Link to='/' className="flex gap-1.5 md:gap-2 lg:gap-4 items-center mx-auto" title="Espresso Emporium">
                            <img src="https://i.ibb.co/jV0kLgs/logo1.png" alt="Logo" className="h-8 md:h-12 lg:h-16" />
                            <h1 className="text-xl md:text-2xl lg:text-5xl font-rancho text-white">Espresso Emporium</h1>
                        </Link>
                    </div>
                </section>
                <section className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4 bg-cover py-2">
                    {
                        links
                    }
                </section>
            </nav>
        </>
    );
};

export default NavBar;