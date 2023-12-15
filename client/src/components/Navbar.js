import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  let history = useHistory();
  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("./login");
  };
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "black" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          GENERATE SHORT URL
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!localStorage.getItem("token") ? (
            <form className="d-flex">
              <Link className="btn btn-primary mx-1" to="/login" role="button">
                Login
              </Link>
              <Link className="btn btn-primary mx-1" to="/signup" role="button">
                Signup
              </Link>
            </form>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              {" "}
              Logout{" "}
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
