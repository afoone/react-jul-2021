import React from "react";
import { logout as logoutAction } from "../redux/authActions";
import { useDispatch, useSelector } from "react-redux";

const NavBar = () => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutAction());
  };

  const user = useSelector((state) => state.user);

  return (
    <div>
      <div className="ui secondary pointing menu">
        <a className="active item">Home</a>
        <a className="item">Messages</a>
        <a className="item">Friends</a>
        <div className="right menu">
          {user && (
            <div className="ui item" onClick={logout}>
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
