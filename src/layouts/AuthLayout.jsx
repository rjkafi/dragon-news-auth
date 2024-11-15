import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
        <div>
            This Is Auth Layout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
