import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    return (
        <header className="navbar-container">
            <nav className="tab-group">
                <NavLink to="/" className={({ isActive }) => isActive ? "tab active" : "tab"}>
                    Home
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "tab active" : "tab"}>
                    About
                </NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "tab active" : "tab"}>
                    Dashboard
                </NavLink>

                {/* Explicit check to ensure username string exists before hiding the login tab */}
                {user && user.username ? (
                    <button
                        className="tab logout-btn"
                        onClick={() => { logout(); navigate("/login"); }}
                    >
                        Logout ({user.username})
                    </button>
                ) : (
                    <NavLink to="/login" className={({ isActive }) => isActive ? "tab active" : "tab"}>
                        Login
                    </NavLink>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
