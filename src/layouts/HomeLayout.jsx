import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Latest from "../components/Latest";
import LeftNavbar from "../components/LeftNavbar";
import Navbar from "../components/Navbar";
import RightNavBar from "../components/RightNavBar";

const HomeLayout = () => {
    return (
        <div>
        <Header></Header>
        <section className="w-11/12 mx-auto">
        <Latest></Latest>
        </section>
        <nav className="w-11/12 mx-auto px-2 py-5">
        <Navbar></Navbar>
        </nav>
        <main className="w-11/12 mx-auto grid md:grid-cols-12 pt-5">
        <aside className="left col-span-3">
            <LeftNavbar></LeftNavbar>
        </aside>
        <section className="col-span-6">
            <Outlet></Outlet>
        </section>
        <aside className=" col-span-3">
            <RightNavBar></RightNavBar>
        </aside>
        </main>
          
        </div>
    );
};

export default HomeLayout;