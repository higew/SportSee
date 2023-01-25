import logo from "../../assets/logo/logo.png";
import "./navbar.css"

function Navbar() {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <nav></nav>
        </header>
    );
}

export default Navbar;