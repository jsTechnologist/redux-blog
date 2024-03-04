import { Link } from "react-router-dom";

const Navbar =() => {
    return (
        <nav>
            <section>
                <h1> وبلاگ ریداکسی </h1>
                <div className="navContent">
                    <div className="navLinks"></div>
                    <Link to ={"/"}> وبلاگ </Link>
                </div>
            </section>
        </nav>
    )
};
export default Navbar;