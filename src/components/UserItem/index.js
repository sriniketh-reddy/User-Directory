import React from "react";
import { Link } from "react-router-dom";
import "../../styles.css";

const UserItem = ({ user }) => {
  return (
    <div className="user-item">
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      <Link to={`/user/${user.id}`} className="detail-link">View Details</Link>
    </div>
  );
};

export default UserItem;