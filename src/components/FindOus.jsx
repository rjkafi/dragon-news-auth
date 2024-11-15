import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


const FindOus = () => {
    return (
        <div>
             <h3 className="text-xl font-semibold ml-3 ">Find Ous On</h3>
           <div className="*:w-full  flex join join-vertical mt-5">
                <button className="btn join-item justify-start text-xl">
                    <FaFacebook></FaFacebook>
                    Facebook
                    </button>
                <button className="btn join-item justify-start text-xl">
                    <AiFillTwitterCircle></AiFillTwitterCircle>
                    Twitter
                </button>
                <button className="btn join-item justify-start text-xl">
                    <FaSquareInstagram></FaSquareInstagram>
                    Instagram
                </button>
            </div> 
        </div>
    );
};

export default FindOus;
