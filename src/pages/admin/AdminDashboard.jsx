import React from "react";

const AdminDashboard = () => {
  return (
    <div>
      <h3 className="fw-bold mb-4">Admin Dashboard</h3>

      <div className="row g-4">
        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Total Users</h6>
            <h3>124</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Total Bookings</h6>
            <h3>78</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Pending Approvals</h6>
            <h3>6</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-3">
            <h6>Revenue</h6>
            <h3>₹1,24,000</h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AdminDashboard;
