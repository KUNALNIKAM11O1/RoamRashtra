import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="admin-wrapper d-flex" style={{ minHeight: "100vh" }}>
      
      
      <aside
        className="bg-dark text-white p-3"
        style={{ width: "250px" }}
      >
        <h4 className="text-center mb-4">Admin Panel</h4>

        <ul className="nav flex-column gap-2">
          <li className="nav-item">
            <NavLink to="/admin" end className="nav-link text-white">
              Dashboard
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin/users" className="nav-link text-white">
              Manage Users
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink to="/admin/bookings" className="nav-link text-white">
              View Bookings
            </NavLink>
          </li>


          <li className="nav-item">
            <NavLink to="/admin/tours" className="nav-link text-white">
              Manage Tours
            </NavLink>
          </li>

          
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">
              Home Page
            </NavLink>
          </li>

        </ul>
      </aside>

     
      <main className="flex-grow-1 p-4 bg-light">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
