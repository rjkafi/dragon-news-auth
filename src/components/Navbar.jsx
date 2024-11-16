import { Link } from "react-router-dom";
import Usericon from '../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";



const Navbar = () => {
  const {user,logOutUser}=useContext(AuthContext) 
  console.log(user) ;
    return (
        <div className="flex justify-between items-center">
            <div className=""></div>
            <div className="space-x-2">
                <Link to='/'>home</Link>
                <Link to='/about'>About</Link>
                <Link to='/career'>Career</Link>
            </div>
            <div className="flex gap-2 items-center">
                {
                    user && user?.email ? <div>
                        <img 
                        className="w-10 h-10 rounded-full"
                        src={user.photoURL} alt="" />
                        <p>{user.displayName}</p>
                    </div> :
                    
                    <img src={Usericon} alt="" />
                }
            
            <div>
                {
                    user && user?.email ? <button 
                    onClick={logOutUser}
                    className="bg-black btn text-neutral-200 text-xl font-semibold"
                    >
                        LogOut
                    </button> : <Link to='/auth/login' className="bg-black btn text-neutral-200 text-xl font-semibold">Login</Link>
                }
            </div>
            </div>
           
        </div>
    );
};

export default Navbar;