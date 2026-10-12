import {Link} from "react-router-dom";
function Navbar({cartCount}){
    return(
        <nav className="navbar">
            <h2>Mystore</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <button className="cart-button">
                    Cart ({cartCount})
                </button>
            </div>
        </nav>
    );
}
export default Navbar;