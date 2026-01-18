
import axios from "axios";
import { toast } from "react-toastify";

const Categorycard = ({ id, name, price, para, btn1, img, meals}) => {

  const modalId = `modal-${id}`;

  const handleBooking = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      toast.error("Please login first to book a tour!");
      return;
    }
    
    const bookingData = {
      user: user.name || user.email, 
      email: user.email,
      tour: name,
      price: price,
      status: "Pending",
      date: new Date().toLocaleDateString()
    };

    try {
      await axios.post("http://localhost:3000/bookings", bookingData);
      toast.success("Booking successful!");
    } catch (error) {
      console.error("Error booking tour:", error);
      toast.error("Failed to book tour.");
    }
  };

  return (
    <>
      <style>
        {`
          .pkg-card {
            transition: transform 0.3s ease, box-shadow 0.5s ease;
            cursor: pointer;
          }

          .pkg-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0,0,0,0.4);
          }

          .pkg-img {
            transition: transform 0.5s ease;
          }

          .pkg-card:hover .pkg-img {
            transform: scale(1.11);
          }
        `}
      </style>

      <div className="col-md-4 mb-3">
        <div className="card pkg-card" style={{ overflow: "hidden", borderRadius: "10px" }}>
          
          <img
            src={img}
            className="card-img-top pkg-img"
            style={{ height: "300px", objectFit: "cover" }}
            alt={name}
          />

          <div className="card-body text-center">
            <h4>{name}</h4>
            <h5>{price}</h5>

            <div className="d-flex justify-content-center align-items-center mb-3">
              <i className="bi bi-cloud-moon-fill me-2"></i>
              <p className="mb-0">{para}</p>
            </div>

           
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target={`#${modalId}`}
            >
              {btn1}
            </button>
          </div>
        </div>
      </div>

      
      <div
        className="modal fade"
        id={modalId}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            
            <div className="modal-header">
              <h5 className="modal-title">{name} Tour Details</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <div className="modal-body text-center">
              <img src={img} alt={name} className="img-fluid mb-3 rounded" />
              
              <p><strong>Duration:</strong> {para}</p>
               <p><strong>Meals:</strong> {meals}</p>
              <p><strong>Price:</strong> {price}</p>
              <p>Includes sightseeing, accommodation & travel assistance.</p>
             
              
            
              
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleBooking}>
                Book Now
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Categorycard;
