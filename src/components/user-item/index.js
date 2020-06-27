import React from "react";
import woman from "../../assets/images/woman-user.png";
import "./index.scss";

const UserItem = ({ text }) => {
  return (
    <div className="user-item">
      <div className="user-item--messages">
        <label>{text}</label>
      </div>
      <img className="user-item--user" src={woman} alt="user-avatar"></img>
    </div>
  );
};

export default UserItem;
