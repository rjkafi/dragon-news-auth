import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const Latest = () => {
    return (
        <div className="flex bg-gray-300 p-3 gap-3">
            <p className="bg-red-600 rounded-md  p-2">Latest</p>
            <Marquee className="space-x-6" pauseOnHover={true}>
                <Link to='/news'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita saepe consequatur laboriosam culpa unde at fugiat earum magni asperiores!
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita saepe consequatur laboriosam culpa unde at fugiat earum magni asperiores!
                </Link>
                <Link to='/news'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi expedita saepe consequatur laboriosam culpa unde at fugiat earum magni asperiores!
                </Link>
            </Marquee>
        </div>
    );
};

export default Latest;