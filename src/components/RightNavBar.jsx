import FindOus from "./FindOus";
import SocialLogin from "./SocialLogin";

const RightNavBar = () => {
    return (
        <div className="space-y-10">
            <SocialLogin></SocialLogin>
            <FindOus></FindOus>
        </div>
    );
};

export default RightNavBar;