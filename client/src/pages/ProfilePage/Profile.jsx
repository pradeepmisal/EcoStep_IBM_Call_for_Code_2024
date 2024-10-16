import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import "./Profile.css";

const Profile = () => {
  const { userData } = useAuth(); // Get userData from context
  console.log(userData);

  // Check if userData is available
  if (!userData) {
    return null; // Or redirect to a different page if necessary
  }

  return (
    <div className="profile-page">
      <div className="profile-sidebar">
        <h3>Options</h3>
        <ul className="profile-sidebar-list">
          <li>
            <Link to="/profile">View Profile</Link>
          </li>
          <li>
            <Link to="/profile/edit">Edit Profile</Link>
          </li>
          <li>
            <Link to="/profile/change-password">Change Password</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
      <div className="profile-details">
        <div className="profile-header">
          <img
            src={
              userData.profileImage ||
              "https://imgs.search.brave.com/-E39lOB7yNIc5Ymx_yPhHhA1zFySZt_DSF-KSsl_mOQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzg0LzY3LzE5/LzM2MF9GXzg0Njcx/OTM5X2p4eW1vWVpP/OE9lYWNjM0pSQkRF/OGJTWEJXajBaZkE5/LmpwZw"
            }
            alt="Profile"
            className="profile-photo"
          />
          <div className="profile-info">
            <h2>{userData.username}</h2>
            <div className="email">{userData.email}</div>
          </div>
        </div>
        <div className="profile-content">
          <h3>About Me</h3>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
