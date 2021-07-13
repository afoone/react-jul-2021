import React from "react";
import { useDispatch } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "logout" });
  };

  return (
    <div>
      <div className="ui secondary pointing menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          <div className="ui item" onClick={logout}>Logout</div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
