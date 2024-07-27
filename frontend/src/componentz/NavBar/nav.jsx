import React from 'react';
import "../NavBar/nav.css";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from "../../store";

const NavBar = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();

  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <b><RiContactsBook2Fill /> TaskFusion</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active mx-2" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item mx-2">
                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/todo">TaskFusion</Link>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
                  </li>
                  <li className="nav-item mx-2">
                    <Link className="nav-link active btn-nav" aria-current="page" to="/signin">Sign In</Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li className="nav-item mx-2" onClick={logout}>
                    <Link className="nav-link active btn-nav" aria-current="page" to="#">Log Out</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="#">
                      <img
                        className="image-fluid user-png"
                        src="data:image/jpeg;base64,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"
                        alt=""
                      />
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
