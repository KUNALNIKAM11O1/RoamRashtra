import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import '../styling/Navbar.css'

const Navbar = () => {
  const nav = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    nav("/loginpage");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{
        background: "linear-gradient(to left, #3662b4, #6778c0, #3662b4)",
      }}
    >
      <div className="container">
       
        <img
          src="/assets/RoamRashtra.jpeg"
          alt="Logo"
          style={{ height: "80px" }}
        />

       
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

       
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto fw-bold fs-5 gap-2">

            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/grouptour" className="nav-link text-white">
                Group Tours
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/personaltour" className="nav-link text-white">
                Personal Tours
              </NavLink>
            </li>

           
            {!user && (
              <>
               <li className="nav-item"> <button className='btn btn-warning btn-sm'>
                <NavLink to="/registerpage" className="nav-link text-white"> Register </NavLink>
                </button>
                
                 </li> <li className="nav-item"><button className='btn btn-success btn-sm'> 
                  <NavLink to="/loginpage" className="nav-link text-white"> Login </NavLink>
                  </button> </li>
              </>
            )}

            
            {user?.role === "admin" && (
              <li className="nav-item">
                <NavLink to="/admin/users" className="nav-link text-white">
                  Manage Users
                </NavLink>
              </li>
            )}

           
            {user && (
              <>
                <li className="nav-item">
                  <NavLink to="/my-bookings" className="nav-link text-white">
                    My Bookings
                  </NavLink>
                </li>

                <li className="nav-item">
                  <button onClick={handleLogout} className="btn btn-danger btn-sm">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
