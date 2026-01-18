import ManageUsers from "../pages/admin/ManageUsers";
import GroupTours from "../pages/GroupTour";
import HomePage from "../pages/HomePage";
import PersonalTour from "../pages/PersonalTour";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
   <>

   <footer className="footer-bg text-light  pt-4 pb-2 " style={{ background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)" }}>
    <div className="container-fluid px-3">
      <div className="row">
        <div className="col-md-3">
          
        <img src="/assets/RoamRashtra.jpeg" alt="Logo" style={{ height: "80px",borderRadius:"6px",paddingBottom:"4px" }} />
        
          <h6 className="footer-title" style={{fontFamily:"sans-serif"}}>RoamRashtra Travels - an Indian travel company excels in domestic tour packages.</h6>
         
        </div>
        <div className="col-md-3">
          <h4 className="footer-title">Useful Links</h4>
          <ul className="footer-web list-unstyled">
  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/" className="footer-link"  style={{color:"inherit",textDecoration:"none"}}>
      Home Page
    </NavLink>
  </li>

  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/grouptour" className="footer-link" style={{color:"inherit",textDecoration:"none"}}>
      Group Tour
    </NavLink>
  </li>

  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/personaltour" className="footer-link"  style={{color:"inherit",textDecoration:"none"}}>
     Personal Tour
    </NavLink>
  </li>
  
  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/admin/users" className="footer-link"  style={{color:"inherit",textDecoration:"none"}}>
     Manage Users
    </NavLink>
  </li>
  
</ul>
       
          
        </div>

        <div className="col-md-3">
          <h4 className="footer-title">Our Company Policies</h4>
         <ul className="footer-web list-unstyled">
  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/terms-condition" className="footer-link"  style={{color:"inherit",textDecoration:"none"}}>
      Booking Terms & Conditions
    </NavLink>
  </li>

  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/privacy-policy" className="footer-link" style={{color:"inherit",textDecoration:"none"}}>
      Company Privacy & Policy
    </NavLink>
  </li>

  <li>
    <i className="bi bi-chevron-double-right me-2"></i>
    <NavLink to="/refund-policy" className="footer-link"  style={{color:"inherit",textDecoration:"none"}}>
      Cancellation & Refund Policy
    </NavLink>
  </li>
</ul>
        </div>
        <div className="col-md-3">
          <h4 className="footer-title">Contact Info</h4>
           <h6 style={{cursor:"pointer"}}><i class="bi bi-house-fill"></i><strong> Address :</strong> Pune,Ind</h6>
          <h6 style={{cursor:"pointer"}}><i class="bi bi-telephone-fill"></i><strong> Phone :</strong> +91 766529251</h6>
           <h6 style={{cursor:"pointer"}}><i class="bi bi-envelope-fill"></i><strong> Email :</strong> roamrashtra@gmail.com</h6>

          </div>
      </div>
    </div>
   </footer>
   </>
  );
};

export default Footer;