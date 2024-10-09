import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth"; // Import useAuth
import "./Navbar.css";
import logo from "../../assets/images/lines_cycle_leaf.jpg";

const Navbar = () => {
  const { isLogedIn, logoutUser } = useAuth(); // Use the authentication context
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsOpen(false);
      setIsDropdownOpen(false); // Close dropdown on larger screens
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="EcoStep Logo" className="logo" />
        <h1 className="site-name">EcoStep</h1>
      </div>
      <div
        className={`navbar-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {isLogedIn ? ( // Check if the user is logged in
          <li className="profile-container">
            <div onClick={toggleDropdown}>
              <img
                src="https://imgs.search.brave.com/-E39lOB7yNIc5Ymx_yPhHhA1zFySZt_DSF-KSsl_mOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw"
                alt="User Profile"
                className="profile-pic"
              />
            </div>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li>
                  <Link to="/leaderboard">Leaderboard</Link>
                </li>
                <li>
                  <Link to="/history">History</Link>
                </li>
                <li onClick={logoutUser}>
                  {" "}
                  {/* Call logoutUser on click */}
                  <Link to="/login">Logout</Link>
                </li>
              </ul>
            )}
          </li>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
