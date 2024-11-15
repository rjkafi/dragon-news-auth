import { Link } from "react-router-dom";
import Usericon from '../assets/user.png'


const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-2">
                <Link to='/'>home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
            <img src={Usericon} alt="" />
            <Link to='/auth/login' className="bg-black btn text-neutral-200 text-xl font-semibold">Login</Link>
            </div>
           
        </div>
    );
};

export default Navbar;