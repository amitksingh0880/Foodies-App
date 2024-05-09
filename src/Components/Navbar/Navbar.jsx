import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { auth } = useSelector((state) => state.userReducer);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic fw-bold" to="/">
            Foodies
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 ">
              <li className="nav-item">
                {/* <Link className="nav-link active fs-5" aria-current="page" to="/">
                  Home
                </Link> */}
              </li>
              { auth ? (
                <li>
                  <Link className="nav-link active fs-5" aria-current="page" to="/">
                    My Order
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="d-flex">
              <Link style={{display:auth ? "none" : "block"}} className="btn bg-white text-success mx-1" to="/login">
                LogIn
              </Link>
              <Link style={{display:auth ? "none" : "block"}} className="btn bg-white text-success mx-1" to="/register">
                SignUp
              </Link>
              <Link style={{display:auth ? "block" : "none"}} className="btn bg-white text-success mx-1" to="/">
                My Cart
              </Link>
              <Link style={{display:auth ? "block" : "none"}} className="btn bg-white text-success mx-1" to="/logout">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
