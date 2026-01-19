import axios from "axios";
import { toast } from "react-toastify";

function PackageCard({name,price,para,btn1,img}) {
    
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
        await axios.post("https://crud-app-task.onrender.com//bookings", bookingData);
        toast.success("Booking successful!");
      } catch (error) {
        console.error("Error booking tour:", error);
        toast.error("Failed to book tour.");
      }
    };

    return(
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
            transform: scale(1.15);
          }
        `}
</style>

    

        
    <div className="col-md-4 mb-3">
      <div className="card pkg-card" style={{overflow:"hidden",borderRadius:"10px"}}>
        <img src={img} className="card-img-top pkg-img" style={{height:"300px",objectFit:"cover"}} alt={name} />

        <div className="card-body text-center">
          <h5>{name}</h5>
         <div className="d-flex justify-content-center align-items-center mb-1">
    <i className="bi bi-geo-alt-fill me-2"></i>
    <p className="mb-0">{price}</p>
  </div>
  <div className="d-flex justify-content-center align-items-center mb-3">
    <i className="bi bi-cloud-moon-fill me-2"></i>
    <p className="mb-0">{para}</p>
  </div>
          <button className="btn btn-primary btn-success " onClick={handleBooking}>{btn1}</button>
          
          
        </div>
      </div>
    </div>
        
        
        </>
    )
}

export default PackageCard