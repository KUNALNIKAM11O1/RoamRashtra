import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get current user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  const fetchBookings = async () => {
    if (!user) return;
    try {
      const res = await axios.get("https://crud-app-task.onrender.com/bookings");
      // Filter bookings for the current user
      const userBookings = res.data.filter(
        (b) => b.email === user.email
      );
      setBookings(userBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
      toast.error("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!user) {
      toast.error("Please login to view your bookings");
      setLoading(false);
      return;
    }

    fetchBookings();
  }, [user?.email]);

  const handleCancel = async (id) => {
    try {
      await axios.patch(`https://crud-app-task.onrender.com/bookings/${id}`, {
        status: "Cancelled",
      });
      toast.success("Booking cancelled successfully!");
      fetchBookings(); // Refresh list to show updated status
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast.error("Failed to cancel booking.");
    }
  };

  if (!user) {
    return (
      <div className="container mt-5 text-center">
        <h3>Please login to view your bookings.</h3>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center" style={{ fontFamily: "cursive", color: "orange" }}>
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <div className="text-center">
          <h4>No bookings found.</h4>
          <p className="text-muted">Explore our packages and book your dream trip!</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover table-bordered shadow-sm">
            <thead className="table-dark text-center">
              <tr>
                <th>#</th>
                <th>Tour Name</th>
                <th>Price</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="text-center bg-light">
              {bookings.map((b, index) => (
                <tr key={b.id}>
                  <td>{index + 1}</td>
                  <td className="fw-bold">{b.tour}</td>
                  <td>{b.price}</td>
                  <td>{b.date || "N/A"}</td>
                  <td>
                    <span
                      className={`badge ${
                        b.status === "Confirmed"
                          ? "bg-success"
                          : b.status === "Cancelled"
                          ? "bg-danger"
                          : "bg-warning text-dark"
                      }`}
                    >
                      {b.status}
                    </span>
                  </td>
                  <td>
                    {b.status !== "Cancelled" && (
                         <button
                         className="btn btn-danger btn-sm"
                         onClick={() => {
                           if (window.confirm("Are you sure you want to cancel this booking?")) {
                             handleCancel(b.id);
                           }
                         }}
                       >
                         Cancel
                       </button>
                    )}
                   {b.status === "Cancelled" && (
                       <span className="text-muted">Cancelled</span>
                   )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
