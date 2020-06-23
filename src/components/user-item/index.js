import React from "react";

import "./index.scss";

const UserItem = () => {
  return (
    <div className="user-item">
      <div className="user-item--messages">
        <label>Mensaje</label>
      </div>
      <img className="user-item--user" src="lala" alt="user-avatar"></img>
    </div>
  );
};

export default UserItem;
