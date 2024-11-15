import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io";


const SocialLogin = () => {
    return (
        <div>
           <h3 className="text-xl font-semibold ml-3">Login With</h3> 
            <div className="*:w-full space-y-2 mt-5">
                <button className="btn">
                    <IoLogoGoogle></IoLogoGoogle>
                    login With Google
                    </button>
                <button className="btn">
                    <FaGithub></FaGithub>
                    login With Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;