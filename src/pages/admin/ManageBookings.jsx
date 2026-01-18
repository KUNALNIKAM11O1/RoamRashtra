import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    try {
      const res = await axios.get("http://localhost:3000/bookings");
      setBookings(res.data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to fetch bookings.");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:3000/bookings/${id}`, {
        status: newStatus,
      });
      fetchBookings();
      toast.success(`Booking status updated to ${newStatus}`);
    } catch (error) {
      console.error("Error updating status:", error);
      toast.error("Failed to update status.");
    }
  };

  return (
    <div>
      <h4 className="fw-bold mb-4">Manage Bookings</h4>

      <table className="table table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>User</th>
            <th>Tour</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {bookings.map((b, i) => (
            <tr key={b.id}>
              <td>{i + 1}</td>
              <td>{b.user} <br/> <small className="text-muted">{b.email}</small></td>
              <td>{b.tour}</td>
              <td>{b.price}</td>
              <td>
                <span className={`badge ${b.status === 'Confirmed' ? 'bg-success' : b.status === 'Cancelled' ? 'bg-danger' : 'bg-secondary'}`}>
                  {b.status}
                </span>
              </td>
              <td>
                <select
                  className="form-select"
                  value={b.status}
                  onChange={(e) => updateStatus(b.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>Confirmed</option>
                  <option>Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
          {bookings.length === 0 && (
            <tr>
              <td colSpan="6" className="text-center">No bookings found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageBookings;
